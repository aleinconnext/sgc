import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound-content">
      <div className="sw-lg-60 px-5">
          <div className="sh-11">
            <a href="index.html">
              <div className="logo-default"></div>
            </a>
          </div>
          <div className="mb-5">
            <h2 className="cta-1 mb-0 text-primary">Ooops, parece um erro!</h2>
            <h2 className="display-2 text-primary">Error 404</h2>
          </div>
          <div className="mb-5">
            <p className="h6">Parece que a página que você está procurando não está disponível.</p>
            {/* <p className="h6">
              Se você acha que isso é um erro, por favor {" "}
              <a href="index.html">Contate-nos</a>.
            </p> */}
          </div>
          <div>
            <a href="#" className="btn btn-icon btn-icon-start btn-primary" onClick={() => {window.location.href = "/"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="cs-icon cs-icon-arrow-left"><path d="M9 17 2.35355 10.3536C2.15829 10.1583 2.15829 9.84171 2.35355 9.64645L9 3M18 10 3 10"></path></svg>
              <span>Voltar para Home</span>
            </a>
            {/* <Link to="/" className="btn btn-icon btn-icon-start btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="cs-icon cs-icon-arrow-left"><path d="M9 17 2.35355 10.3536C2.15829 10.1583 2.15829 9.84171 2.35355 9.64645L9 3M18 10 3 10"></path></svg>
              <span>Voltar para Home</span>
            </Link> */}
          </div>
        </div>
    </div>
  );
}

export default NotFound;
