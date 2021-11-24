import './style.css';

export function NewsLetter(){
    return(
        <div className="newsletter">
          <div className="container">
            <h2>Newsletter</h2>
            <p className="fw-light">Assine nossa newsletter para receberr atualizações sobre ofertas especiais.</p>
            <form>
              <input type="text" className="form-control form-control-lg" placeholder="Informe seu e-mail"/>
              <button className="btn btn-primary btn-lg">Inscreva-se</button>
            </form>
          </div>
        </div>
    )
}

