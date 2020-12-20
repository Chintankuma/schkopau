import React from 'react'
import './Footer.css'

function footer() {
    return (
        <div className="footer">
            <footer class="pt-4 my-md-5 pt-md-5 border-top">
    <div class="row">
      <div className="gemeinde" class="col-6 col-md" style={{marginLeft: "50px"}}>
        <h5 >Gemeinde Schkopau</h5>
        <ul class="list-unstyled text-small">
        <li><a class="link-secondary" href="#"><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Logo2_der_Gemeinde_Schkopau.gif/220px-Logo2_der_Gemeinde_Schkopau.gif"></img></a></li>
          <li><a class="link-secondary" href="#"><small class="d-block mb-3 text-muted">© 2020-2022</small></a></li>  
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Lebenssituationen</h5>
        <ul class="list-unstyled text-small">
          <li><a class="link-secondary" href="#">Notfall</a></li>
          <li><a class="link-secondary" href="#">Geburt</a></li>
          <li><a class="link-secondary" href="#">Heiraten</a></li>
          <li><a class="link-secondary" href="#">Kinderbetreuung</a></li>
          <li><a class="link-secondary" href="#">Krankheit</a></li>
          <li><a class="link-secondary" href="#">Pflege</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>Service</h5>
        <ul class="list-unstyled text-small">
          <li><a class="link-secondary" href="#">Behördenrufnummer: 123</a></li>
          <li><a class="link-secondary" href="#">Behördenrufnummer: 123</a></li>
          <li><a class="link-secondary" href="#">Sag’s uns einfach</a></li>
          <li><a class="link-secondary" href="#">Mobile Version</a></li>
          <li><a class="link-secondary" href="#">Öffnungszeiten</a></li>
          <li><a class="link-secondary" href="#">Terminvergabe online</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>About</h5>
        <ul class="list-unstyled text-small">
          <li><a class="link-secondary" href="#">Datenschutz</a></li>
          <li><a class="link-secondary" href="#">Barrierfreiheit</a></li>
          <li><a class="link-secondary" href="#">Hilfe</a></li>
          <li><a class="link-secondary" href="#">Impressum</a></li>
        </ul>
      </div>
    </div>
  </footer>
        </div>
    )
}

export default footer
