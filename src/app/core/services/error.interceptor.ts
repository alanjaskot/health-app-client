import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  snackBarDuration = '5000';

  constructor(private snackBar: MatSnackBar, private ngZone: NgZone) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('error =>', error);
        this.snackBar.open(error.message);
        return throwError(error);
      })
    );
  }

  private showSnackBar(message: string) {
    this.ngZone.run(() => {
      this.snackBar.open(message, 'close'),
        {
          duration: this.snackBarDuration,
        };
    });
  }
}
