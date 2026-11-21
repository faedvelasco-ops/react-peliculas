import cuceiLogo from "../img/cucei-logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="app-footer">
      <img src={cuceiLogo} alt="Escudo CUCEI" className="footer-logo" />

      <dl className="footer-info">
        <div>
          <dt>Integrante</dt>
          <dd>Faed Federico Velasco Mero</dd>
        </div>
        <div>
          <dt>Profesor</dt>
          <dd>Zeus Emanuel Gutierrez Cobian</dd>
        </div>
        <div>
          <dt>Materia</dt>
          <dd>Desarrollo de Aplicaciones Web en la Nube y Móviles</dd>
        </div>
        <div>
          <dt>Calendario escolar</dt>
          <dd>2026B</dd>
        </div>
        <div>
          <dt>Mes y año</dt>
          <dd>Noviembre 2026</dd>
        </div>
      </dl>
    </footer>
  );
}

export default Footer;
