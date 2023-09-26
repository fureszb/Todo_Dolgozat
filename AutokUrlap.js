class AutokUrlap{
    #obj={
        tipus: "",
        rendszam: "",
    }
    constructor(obj, szuloElem){
        this.#obj = obj;
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
          <button type="submit" class="btn btn-default kuld">Elküldés</button>
        </form>`);
        this.tipus = $("#tipus");
        this.rendszam = $("#rendszam");
        this.sumbit = $(".kuld");
        this.sumbit.on("click", ()=>{
            event.preventDefault();
            this.#obj.tipus = this.tipus.val();
            this.#obj.rendszam = this.rendszam.val();
            this.#esemenyTrigger("hozzaad");
            this.tipus.val('');
            this.rendszam.val('');
        });
    }
    #esemenyTrigger(nev){
        const esemeny = new CustomEvent(nev, {detail : this.#obj});
        window.dispatchEvent(esemeny);
    }
}
export default AutokUrlap;