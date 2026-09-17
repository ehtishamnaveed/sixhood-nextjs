'use client';

import { useEffect, useRef } from 'react';

const VERTEX = `
attribute vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;

// Domain-warped noise mapped onto the four logo pastels, drifting slowly and bending toward the pointer.
const FRAGMENT = `
precision mediump float;
uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uPointer;

const vec3 LILAC = vec3(0.812, 0.761, 0.969);
const vec3 BLUSH = vec3(0.965, 0.792, 0.875);
const vec3 APRICOT = vec3(0.980, 0.867, 0.769);
const vec3 ICE = vec3(0.741, 0.945, 0.925);
const vec3 PAPER = vec3(0.937, 0.933, 0.957);

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 5; i++) {
    value += amp * noise(p);
    p = p * 2.03 + vec2(1.7, 9.2);
    amp *= 0.5;
  }
  return value;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  float aspect = uResolution.x / uResolution.y;
  vec2 p = vec2(uv.x * aspect, uv.y);
  vec2 pointer = vec2(uPointer.x * aspect, uPointer.y);
  float t = uTime * 0.035;

  vec2 q = vec2(fbm(p * 1.3 + t), fbm(p * 1.3 - t + 4.1));
  vec2 r = vec2(fbm(p * 1.1 + q * 1.7 + vec2(1.7, 9.2) + t * 1.4),
                fbm(p * 1.1 + q * 1.7 + vec2(8.3, 2.8) - t));
  float pull = exp(-distance(p, pointer) * 2.6);
  r += (pointer - p) * 0.35 * pull;
  float n = fbm(p * 1.2 + r * 1.9);

  vec3 color = mix(LILAC, BLUSH, smoothstep(0.25, 0.7, n + (1.0 - uv.x) * 0.1));
  color = mix(color, ICE, smoothstep(0.5, 0.85, r.x + uv.x * 0.3 - 0.12));
  color = mix(color, APRICOT, smoothstep(0.55, 0.92, r.y + (1.0 - uv.x) * 0.18 - uv.y * 0.15));

  float sheen = sin(n * 7.0 + (uv.x + uv.y) * 4.0 + uTime * 0.18) * 0.5 + 0.5;
  color += vec3(0.035) * sheen * (0.6 + pull);

  color = mix(color, PAPER, smoothstep(0.42, 0.0, uv.y) * 0.92);
  gl_FragColor = vec4(color, 1.0);
}
`;

const RESOLUTION_SCALE = 0.4;

export default function IridescentField({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
    if (!gl) return;

    const compile = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
    };
    const vertex = compile(gl.VERTEX_SHADER, VERTEX);
    const fragment = compile(gl.FRAGMENT_SHADER, FRAGMENT);
    if (!vertex || !fragment) return;

    const program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, 'uResolution');
    const uTime = gl.getUniformLocation(program, 'uTime');
    const uPointer = gl.getUniformLocation(program, 'uPointer');

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: 0.62, y: 0.58, tx: 0.62, ty: 0.58 };
    const start = performance.now();
    let frame = 0;
    let visible = true;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(rect.width * dpr * RESOLUTION_SCALE));
      canvas.height = Math.max(1, Math.round(rect.height * dpr * RESOLUTION_SCALE));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
    };

    const draw = (now) => {
      pointer.x += (pointer.tx - pointer.x) * 0.035;
      pointer.y += (pointer.ty - pointer.y) * 0.035;
      gl.uniform1f(uTime, reduce ? 18 : (now - start) / 1000 + 18);
      gl.uniform2f(uPointer, pointer.x, pointer.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      canvas.classList.add('is-ready');
    };

    const loop = (now) => {
      draw(now);
      frame = visible && !document.hidden ? requestAnimationFrame(loop) : 0;
    };

    const play = () => {
      if (!reduce && !frame && visible && !document.hidden) frame = requestAnimationFrame(loop);
    };

    const onPointer = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = (event.clientX - rect.left) / rect.width;
      pointer.ty = 1 - (event.clientY - rect.top) / rect.height;
    };

    const onResize = () => {
      resize();
      if (reduce) draw(performance.now());
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      play();
    });

    resize();
    draw(performance.now());
    observer.observe(canvas);
    play();

    window.addEventListener('resize', onResize);
    window.addEventListener('pointermove', onPointer, { passive: true });
    document.addEventListener('visibilitychange', play);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointer);
      document.removeEventListener('visibilitychange', play);
    };
  }, []);

  return <canvas ref={canvasRef} className={`iridescent-field ${className}`} aria-hidden="true" />;
}
