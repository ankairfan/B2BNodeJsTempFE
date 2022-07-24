import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private toastr: ToastrService) { }


errorHandler(error: any): void {
  if(error.status==400){
   this.toastr.error(error.error.message, 'Error');
  } else if(error.status==0){
    this.toastr.error('Bağlantı hatası. Lütfen daha sonra tekrar deneyiniz.', 'Error');
  }else if(error.status==500){
    this.toastr.error('Sunucu hatası. Lütfen daha sonra tekrar deneyiniz.', 'Error');
  }else if(error.status==405){
    this.toastr.error('Yetkisiz erişim. Lütfen daha sonra tekrar deneyiniz.', 'Error');
  }else if(error.status==403){
    this.toastr.error('Yetkisiz erişim. Lütfen daha sonra tekrar deneyiniz.', 'Error');
  }else if(error.status==404){
    this.toastr.error('Sayfa bulunamadı. Lütfen daha sonra tekrar deneyiniz.', 'Error');
}
  else{
    this.toastr.error('Beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.', 'Error');
  }

}
}
