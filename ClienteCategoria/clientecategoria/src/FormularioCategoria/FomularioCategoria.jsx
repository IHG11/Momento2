export function FormularioCategoria() {

    return (

        <>
            <section className="conatiner">
                <div className="row my-5">
                    <di className="col-12 cold-m-8">
                        <h3>Registro de categoria</h3>
                        <hr />
                        <form className="p-5 border rouded">

                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                    <i class="bi bi-person-fill"></i>
                                </span>
                                <input type="text" class="form-control" placeholder="Nombre" />
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                    <i class="bi bi-pencil-square"></i>
                                </span>
                                <input type="text" class="form-control" placeholder="Descripcion" />
                            </div>

                            <button className="btm btn-outline-primary w-100">Registrar</button>
                        </form>
                    </di>
                </div>
            </section>
        </>
    )
}