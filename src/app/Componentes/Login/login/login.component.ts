import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../Servicios/Auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router,   private route: ActivatedRoute ) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (res: any) => {
       
        if (res.data && res.data.token) {
          this.authService.saveToken(res.data.token); 
    
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/""';
          this.router.navigate([returnUrl]); 
        }
      },
      error: (err) => {
        console.error('Error en login:', err);
        this.error = 'Credenciales incorrectas, intenta nuevamente.';
      },
      complete: () => {
        console.log('Logueo Exitoso');
      },
    });
  }
}
