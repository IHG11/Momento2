export function FormularioIngreso() {

    return (

        <>
            <setion className="container">
                <div className="row my-5">
                    <div className="col-12 col-md-8">
                        <h3>Registro de Ingreso</h3>
                        <hr />
                        <form className="p-5 border rounder ">

                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                    <i class="bi bi-cash"></i>
                                </span>
                                <input type="Number" class="form-control" placeholder="Monto" />
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                    <i class="bi bi-calendar-check-fill"></i>
                                </span>
                                <input type="Date" class="form-control" placeholder="Fecha" />
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                    <i class="bi bi-pencil-fill"></i>
                                </span>
                                <input type="text" class="form-control" placeholder="Descripcion" />
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                    <i class="bi bi-person-check"></i>
                                </span>
                                <input type="text" class="form-control" placeholder="Nombre" />
                            </div>

                            <button className="btn btn-outline-primary w-100">Registrar</button>
                        </form>
                    </div>
                </div>
            </setion>
        </>
    )
}