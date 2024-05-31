import { createRoot } from 'react-dom/client';
import { App } from './app';
import { StrictMode } from 'react';
import './fonts/MyFonts.ttf'
import './style.css'

const domNode = document.getElementById('root') as HTMLDivElement;

const root = createRoot(domNode);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
