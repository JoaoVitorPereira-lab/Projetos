import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/home'
import PerguntasFutebol from './pages/pf/pf'

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/perguntasfutebol' element={<PerguntasFutebol />} />
            </Routes>
        </BrowserRouter>
    )
}