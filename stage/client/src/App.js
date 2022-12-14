import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './routes/Navigation/navigation.component';
import PageAdmin from './routes/page-admin/page-admin.component';
import AjoutProf from './routes/Ajout-prof/ajout-prof.component';
import AjoutFiliere from './routes/ajout-filiere/ajout-filiere.component';
import FormFiliere from './components/form-filiere/form-filiere.component';
import AuthAdmin from './routes/authentication/auth-admin/auth-admin.component';
import Home from './routes/home/home.component';
import FormModule from './components/form-module/form-module.component';
import AuthProf from './routes/authentication/auth-prof/auth-prof.component';
import PageProf from './routes/page-prof/page-prof.component';
import AjoutInfo from './routes/ajout-info/ajout-info.component';
import Footer from './routes/footer/footer.component';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route path='/' element={<Footer />}>
					<Route index element={<Home />} />
					<Route path='/page-admin' element={<PageAdmin />} />
					<Route path='/profs' element={<AjoutProf />} />
					<Route path='/filieres' element={<AjoutFiliere />} />
					<Route path='/infos' element={<AjoutFiliere />} />
					<Route path='/modules/:name:id' element={<FormFiliere />} />
					<Route path='/form' element={<FormModule />} />
					<Route path='/auth-prof' element={<AuthProf />} />
					<Route path='/auth-admin' element={<AuthAdmin />} />
					<Route path='/page-prof/:nom' element={<PageProf />} />
					<Route path='/ajout-info' element={<AjoutInfo />} />
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
