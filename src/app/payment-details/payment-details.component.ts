import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service : PaymentDetailService,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }


  populateForm(selectRecord : PaymentDetail){
    this.service.formData = Object.assign({},selectRecord);
  }

  onDelete(id:number){
    if(confirm(`${id}`)){
    this.service.deletePaymentDetail(id)
    .subscribe(
      res => {
        this.service.refreshList();
        this.toastr.error('Deleted','Register Payment Detail');
      },
      err => {console.log(err);
      }
    )
  }
  }
}
