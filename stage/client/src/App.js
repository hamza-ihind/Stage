import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './routes/Navigation/navigation.component';
import PageAdmin from './routes/page-admin/page-admin.component';
import AjoutProf from './routes/Ajout-prof/ajout-prof.component';
import AjoutFiliere from './routes/ajout-filiere/ajout-filiere.component';
import TablesView from './components/tables-view/tables-view.component';
import FormFiliere from './components/form-filiere/form-filiere.component';
import Home from './routes/home/home.component';
import FormModule from './components/form-module/form-module.component';
import AuthProf from './routes/authentication/auth-prof/auth-prof.component';
import PageProf from './routes/page-prof/page-prof.component';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route path='/admin' element={<PageAdmin />} />
				<Route path='/profs' element={<AjoutProf />} />
				<Route path='/view-infos' element={<TablesView />} />
				<Route path='/infos' element={<AjoutFiliere />} />
				<Route path='/modules/:name:id' element={<FormFiliere />} />
				<Route path='/form' element={<FormModule />} />
				<Route path='/auth-prof' element={<AuthProf />} />
				<Route index element={<Home />} />
				<Route path='/filieres' element={<AjoutFiliere />} />
				<Route path='/page-prof/:nom' element={<PageProf />} />
			</Route>
		</Routes>
	);
}

export default App;
