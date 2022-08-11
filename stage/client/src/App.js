import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './routes/Navigation/navigation.component';
import PageAdmin from './routes/page-admin/page-admin.component';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route path='/admin' element={<PageAdmin />} />
			</Route>
		</Routes>
	);
}

export default App;
