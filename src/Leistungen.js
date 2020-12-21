import React from 'react'

function Leistungen() {
    return (
      <div className="accordion" class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Arbeit und Ruhestand
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
    <div class="card-body">
      <h6>
      Sie werden demnächst Eltern oder haben gerade ein Kind bekommen? Hier erhalten Sie Informationen und Tipps zu zahlreichen Dingen, die in der Zeit vor und nach der Geburt wichtig sind.
      </h6>
      
      </div>
      <div class="card-body">
      <h4>Untergeordenete Leistungen</h4>
      </div>
      <div class="card-body">
      Arbeits und Tarifrecht
      </div>
      <div class="card-body">
      Arbeitslosigkeit
      </div>
      <div class="card-body">
      Insolvenzgeld
      </div>
      <div class="card-body">
      Volkshochschule Angebote 
      </div>
    </div>
  </div>
  <div class="card mt-2">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Bildung
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
      Berufsbildung im dualen System
      </div>
      <div class="card-body">
      Berufsorientierung, Berufsberatung, Berufsvorbereitung
      </div>
      <div class="card-body">
      Finanzielle und sonstige Hilfen
      </div>
      <div class="card-body">
      Tätigkeit im Ausland
      </div>
    </div>
  </div>
  <div class="card mt-2">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Geburt
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
      Finanzielle und sonstige Hilfen
      </div>
      <div class="card-body">
      Nach der Geburt
      </div>
      <div class="card-body">
      Vor der Geburt
      </div>
    </div>
  </div>
</div>
)
}

export default Leistungen
