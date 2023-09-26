class AutokUrlap {
  #obj = {
    tipus: "",
    rendszam: "",
  };
  constructor(szuloElem) {
    this.szuloElem = szuloElem.append(`<h2>Autók űrlap</h2>
        <form>
          <div class="form-group">
            <label for="tipus">Tipus:</label>
            <input type="text" class="form-control" id="tipus" placeholder="Írd be az autód típusát" name="tipus">
          </div>
          <div class="form-group">
            <label for="rendszam">Rendszám:</label>
            <input type="text" class="form-control" id="rendszam" placeholder="Írd be az autód rendszámát" name="rendszam">
          </div>
          <button type="button" class="btn btn-success kuld">Elküldés</button>
        </form>`);
    this.tipus = $("#tipus");
    this.rendszam = $("#rendszam");
    this.sumbit = $(".kuld");
    this.sumbit.on("click", (event) => {
      event.preventDefault();

      this.#obj.tipus = this.tipus.val();
      this.#obj.rendszam = this.rendszam.val();

      this.#esemenyTrigger("hozzaad");
      this.tipus.val("");
      this.rendszam.val("");
    });
  }
  #esemenyTrigger(nev) {
    //console.log(this.#obj);

    const esemeny = new CustomEvent(nev, { detail: this.#obj });
    window.dispatchEvent(esemeny);
  }
}
export default AutokUrlap;
