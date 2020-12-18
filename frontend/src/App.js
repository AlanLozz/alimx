import UserForm from './components/UserForm';
import Navbar from './components/Static/Navbar';
import './styles.css';

export default function App() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card rounded-0 shadow">
                            <div className="card-header">
                                <h4>Registro</h4>
                                <p className="text-muted mb-0"><i class="far fa-clock"></i> En menos de 5 minutos.</p>
                            </div>
                            <div className="card-body">
                                <div className="media">
                                    <img src="https://www.attractivepartners.co.uk/wp-content/uploads/2017/06/profile.jpg" className="img-fluid mr-2 rounded-circle" width="80" alt="Foto de perfil" />
                                    <div className="media-body">
                                        <UserForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}