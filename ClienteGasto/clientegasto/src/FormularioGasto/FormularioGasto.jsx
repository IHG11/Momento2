export function FormularioGasto() {

    return (

        <>
            <section className="container">
                <div className="row my-5">
                    <div className="col-12 col-md-8">
                        <h3>Registro de gasto</h3>
                        <hr />
                        <form className="p-5 border rounder">

                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                    <i class="bi bi-coin"></i>
                                </span>
                                <input type="Number" class="form-control" placeholder="Monto" />
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                    <i class="bi bi-calendar-date"></i>
                                </span>
                                <input type="Date" class="form-control" placeholder="Fecha" />
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                    <i class="bi bi-pencil"></i>
                                </span>
                                <input type="text" class="form-control" placeholder="Descripcion" />
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                    <i class="bi bi-person"></i>
                                </span>
                                <input type="text" class="form-control" placeholder="Nombre" />
                            </div>

                            <button className="btn btn-outline-primary w-100">Registar</button>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}