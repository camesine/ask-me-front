import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

	private Email: string;
	private Password: string;

	constructor(private router: Router) {
		this.Email = '';
		this.Password = '';
	}

	ngOnInit() {
	}

	onSubmit() {
		this.router.navigate(['main']);
	}

}
