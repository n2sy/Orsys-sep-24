import { HttpInterceptorFn } from '@angular/common/http';

export const addTokenInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.method == 'GET') return next(req);

  let token = localStorage.getItem('access_token');
  if (token) {
    console.log(req);

    let cloneReq = req.clone({
      setHeaders: { Authorization: `bearer ${token}` },
    });
    console.log(cloneReq);

    return next(cloneReq);
  }

  return next(req);
};
