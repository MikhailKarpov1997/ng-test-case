import { Component } from '@angular/core';
import { ProfileService } from 'shared';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})


export class ProfileComponent {
  profileData:any
  onEditProfile:boolean = false;
  newProfileData:any;
  clientForm!: FormGroup;



  constructor(public getData: ProfileService, private fb: FormBuilder) {
   }

  ngOnInit(): void {
   this.getData.profile$.subscribe((event:any)=>{
    this.profileData = event;

    this._createForm()
   });
  }

  private _createForm() {
    this.clientForm = this.fb.group({
      firstName:
       [this.profileData.firstName, 
      [
        Validators.required, 
        Validators.maxLength(255)
      ]],

      lastName: [
        this.profileData.lastName,
        [
          Validators.required,
          Validators.maxLength(255),
        ],
      ],

      phoneNumber: [
        this.profileData.phoneNumber,
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      ],

      webSite: [
        this.profileData.WebSite,
        [
          Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')
        ],
      ],


    })
  }

  get _firstName() {
    return this.clientForm.get('firstName')
  }

  get _lastName() {
    return this.clientForm.get('lastName')
  }

  get _phoneNumber() {
    return this.clientForm.get('phoneNumber')
  }

  get _webSite() {
    return this.clientForm.get('phoneNumber')
  }


}
