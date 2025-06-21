import './index.css';

function App() {
  return (
    <div className="container">
      <h1>Ahmed Naglah</h1>
      <p className="contact">
        Gainesville, Florida, USA | +1 (502) 551-2773 | <a href="mailto:ahmed.naglah@gmail.com">ahmed.naglah@gmail.com</a><br />
        <a href="https://github.com/AhmedNaglah" target="_blank">GitHub</a> | <a href="https://linkedin.com/in/ahmednaglah" target="_blank">LinkedIn</a>
      </p>

      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>AI/ML:</strong> PyTorch, TensorFlow, scikit-learn, Hugging Face</li>
          <li><strong>Languages:</strong> Python, R, JavaScript, HTML, CSS, SQL, C++, MATLAB</li>
          <li><strong>Data Viz:</strong> ggplot2, pandas, matplotlib, numpy, OpenCV</li>
          <li><strong>Web:</strong> React, FastAPI, Flask, Angular</li>
          <li><strong>Database:</strong> SQLAlchemy, MySQL</li>
          <li><strong>DevOps:</strong> Git, Docker, AWS EC2, Slurm</li>
          <li><strong>Bioinformatics:</strong> Seurat, QuPath, PaQuO, OpenSlide, TiffSlide, ImageJ, 10x Cell & Space Ranger</li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li><strong>Ph.D., Interdisciplinary AI</strong> – University of Louisville, USA (2022)</li>
          <li><strong>M.Sc., Informatics Engineering</strong> – Nile University, Egypt (2016)</li>
          <li><strong>B.Sc., Electrical & Computer Engineering</strong> – Ain Shams University, Egypt (2008)</li>
        </ul>
      </section>

      <section>
        <h2>Professional Summary</h2>
        <p>
          Interdisciplinary AI/Informatics scientist with 10+ years of experience across telecom, computer vision, biotechnology, and bioimaging.
          Expert in developing ML pipelines and building end-to-end systems.
        </p>
      </section>

      <section>
        <h2>Professional Experience</h2>
        <ul>
          <li><strong>Assistant Scientist</strong> – Univ. of Florida (2023–present)</li>
          <li><strong>Postdoc Research Associate</strong> – Univ. of Florida (2022–2023)</li>
          <li><strong>Research Assistant</strong> – Univ. of Louisville (2018–2022)</li>
          <li><strong>Senior Engineer (AI/Telecom)</strong> – Vodafone, Egypt (2015–2018)</li>
          <li><strong>Engineer (Network Analytics)</strong> – Orange, Egypt (2008–2015)</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li><strong>Digital Staining in Histopathology:</strong> GAN-based virtual staining models for fibrosis detection.</li>
          <li><strong>HuBMAP:</strong> Pipelines for cell-type deconvolution, biomarker discovery, cloud tools.</li>
          <li><strong>KPMP:</strong> AI models for CKD/AKI analysis, renal histopathology software tools.</li>
        </ul>
      </section>

      <section>
        <h2>Selected Publications</h2>
        <ul>
          <li>Conditional GANs for fibrosis detection, <em>Medical Image Analysis</em> (2022)</li>
          <li>US Patent on fibrosis detection, ULRF (2022)</li>
          <li>Diabetic nephropathy histomorphometry, <em>SPIE 2024</em></li>
        </ul>
      </section>

      <section>
        <h2>Certificates</h2>
        <ul>
          <li>Graduate Certificate in Data Science – Univ. of Louisville (2020)</li>
        </ul>
      </section>

      <section>
        <h2>Selected Awards</h2>
        <ul>
          <li><strong>KPMP Travel Award</strong> – For AI-based renal histopathology work (2025)</li>
        </ul>
      </section>

      <section>
        <h2>Professional Activities</h2>
        <ul>
          <li>Reviewer – MICCAI, IEEE TMI, JBHI, IEEE Access</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
