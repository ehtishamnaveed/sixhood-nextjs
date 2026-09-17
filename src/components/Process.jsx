import { process } from '../content/site';

const pad = (value) => String(value).padStart(2, '0');

export default function Process() {
  return (
    <section id="process" className="process" data-tone="light" aria-labelledby="process-title" tabIndex={-1}>
      <div className="shell process__grid">
        <header className="section-head process__head">
          <p className="label">How a project runs</p>
          <h2 id="process-title" className="display section-head__title" data-reveal>
            <span className="line">
              <span className="line__inner">First call</span>
            </span>
            <span className="line">
              <span className="line__inner">to live</span>
            </span>
            <span className="line">
              <span className="line__inner">product.</span>
            </span>
          </h2>
          <p className="process__lede">
            Four stages, one team the whole way through. You always know what is being built this week and what it
            costs.
          </p>
        </header>

        <ol className="process__steps">
          {process.map((step, index) => (
            <li key={step.title} className="step" style={{ '--i': index }}>
              <div className="step__top">
                <span className="step__number">
                  {pad(index + 1)} <span aria-hidden="true">/</span> {pad(process.length)}
                </span>
                <span className="step__duration">{step.duration}</span>
              </div>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__summary">{step.summary}</p>
              <div className="step__outputs">
                <p className="step__outputs-label">You get</p>
                <ul>
                  {step.outputs.map((output) => (
                    <li key={output}>{output}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
