import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  image: File
  imagePreview
  form: FormGroup

  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(''),
      image: new FormControl(),
      category: new FormControl(''),
      info: new FormControl(''),
      price: new FormControl('')
    })
  }

  
  onFileUpload(event: any){
    const file = event.target.files[0]
    this.image = file

    const reader = new FileReader()
    reader.onload = () => {
      this.imagePreview = reader.result
    }

    reader.readAsDataURL(file)

  }


  createProduct(){

    this.service.create_product(
          this.form.value.title,
          this.form.value.category,
          this.form.value.info,
          this.form.value.price,

          this.image
       )
      .subscribe(
        res => console.log('Created !',res)
      )
  }

}
