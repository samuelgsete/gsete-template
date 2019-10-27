import { Injectable } from '@angular/core';

@Injectable()
export class Routers {
    public rotas = [
        { path: '/', icon: 'home', label: 'home'},
        { path: '/page1', icon: 'face', label: 'page1'},
        { path: '/page2', icon: 'build', label: 'page2'},
        { path: '/page3', icon: 'dashboard', label: 'page3'},
        { path: '/page4', icon: 'eco', label: 'page4'},
    ]
}

