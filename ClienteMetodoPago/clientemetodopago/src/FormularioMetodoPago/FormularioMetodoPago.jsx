export function FormularioMetodoPago() {

    return (

        <>
            <section className="container">
                <div className="row my-5">
                    <div className="col-12 col-md-8">
                        <h3>Registro Metodo Pago</h3>
                        <hr />
                        <form className="p-5 border rounded">

                            <div class="input-group mb-3">
                                <span class="input-group-text" >
                                    <i class="bi bi-person-circle"></i>
                                </span>
                                <input type="text" class="form-control" placeholder="Nombre" />
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text" >
                                    <i class="bi bi-pencil"></i>
                                </span>
                                <input type="text" class="form-control" placeholder="Descripcion" />
                            </div>

                            <button className="btn btn-outline-primary w-100">Registrar</button>
                        </form>

                    </div>
                </div>
            </section>
        </>
    )
}