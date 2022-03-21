import React,{Component} from "react"
import '../Styles/FrmRegistroStyle.css'
class FrmRegistro extends Component{
    render(){ 
        return(
            <>
                <form className="form-registro">
                    <div>
                        <label>NOMBRE</label>
                        <input type={'text'} id="nombreId" placeholder="Ingrese su nombre..."  />
                    </div>
                    <div>
                        <label>APELLIDO</label>
                        <input type={'text'} id="apellidoId" placeholder="Ingrese su apellido..."  />
                    </div>
                    <div>
                        <label>EMAIL</label>
                        <input type={'email'} id="emailId" placeholder="Ingrese su email..."  />
                    </div>  
                    <div>
                        <label>TELEFONO</label>
                        <input type={'number'} id="telefonoId" placeholder="Ingrese su telefono..."  />
                    </div>
                    <div>
                        <label>PASSWORD</label>
                        <input type={'password'} id="passwordId" placeholder="Ingrese un password..."  />
                    </div>
                    <div>
                        <label>CONFIRMAR PASSWORD</label>
                        <input type={'password'} id="passwordRepeatId" placeholder="Confirme el password..."  />
                    </div>  
                </form>
            </>
        );
    }
}

export default FrmRegistro;