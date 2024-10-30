export function FormularioUsuario() {

    return (

        <>
            <section className="container">
                <div className="row my-5">
                    <div className="col-12 col-md-8">
                        <h3>Registro de usuario</h3>
                        <hr />
                        <form className="p-5 border rounded">
                            
                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                <i class="bi bi-person-circle"></i>
                                </span>
                                <input type="text" class="form-control" placeholder="Nombre" />
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                <i class="bi bi-cake2-fill"></i>
                                </span>
                                <input type="Number" class="form-control" placeholder="Edad" />
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                <i class="bi bi-phone"></i>
                                </span>
                                <input type="Number" class="form-control" placeholder="Telefono" />
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                <i class="bi bi-envelope"></i>
                                </span>
                                <input type="text" class="form-control" placeholder="Correo" />
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                <i class="bi bi-lock"></i>
                                </span>
                                <input type="password" class="form-control" placeholder="Contraseña" />
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                <i class="bi bi-calendar"></i>
                                </span>
                                <input type="Date" class="form-control" placeholder="FechaRegistro" />
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text">
                                <i class="bi bi-geo-alt"></i>
                                </span>
                                <input type="text" class="form-control" placeholder="Ciudad" />
                            </div> 

                            <button className="btn btn-outline-primary w-100">Registar</button>
                            
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}