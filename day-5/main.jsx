import {BrowserRouter} from 'react- Router-dom';
import { StrictMode } from "react";
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
        <APP/>
        </BrowserRouter>
    </StrictMode>
);
