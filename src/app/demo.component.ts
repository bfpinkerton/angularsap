import { Component } from "@angular/core";

@Component ({
    selector: 'demo',
    template: '<h2>This is demo {{title}}</h2>'
}
)
export class DemoComponent {
    title = "Application"
}