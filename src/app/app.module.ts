import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MyContainerComponent } from './myContainer/myContainer.component';
import { TopnavComponent } from './myContainer/topnav/topnav.component';
import { HeaderComponent } from './myContainer/header/header.component';
import { Txtsec1Component } from './myContainer/txtsec1/txtsec1.component';
import { Txtsec2Component } from './myContainer/txtsec2/txtsec2.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { ClassStyleComponent } from './data-bind/class-style/class-style.component';
import { EventbindComponent } from './data-bind/eventbind/eventbind.component';
import { TwoWayComponent } from './data-bind/two-way/two-way.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'; //ngx-bootstrap
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactusComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PricingComponent } from './pricing/pricing.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { TelevisionComponent } from './products/television/television.component';
import { WashingmachineComponent } from './products/washingmachine/washingmachine.component';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ServicesComponent } from './services/services.component';
import { ProfileComponent } from './profile/profile.component';
import { ApiService } from './api.service';



const AppRoutes:Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'register', component: ContactusComponent},
  {path:'buy-products', component: ParentComponent},
  {path:'products', component: ProductsComponent, children: [
    {path:'laptop', component: LaptopComponent},
    {path:'mobile', component: MobileComponent},
    {path:'television', component: TelevisionComponent},
    {path:'washingmachine', component: WashingmachineComponent}
  ]},
  {path:'**', component: PricingComponent} //wildcard route should always be in the end
]
@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopnavComponent,
    HeaderComponent,
    Txtsec1Component,
    Txtsec2Component,
    DataBindComponent,
    ClassStyleComponent,
    EventbindComponent,
    TwoWayComponent,
    NgifComponent,
    NgswitchComponent,
    NgforComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactusComponent,
    LoginComponent,
    PricingComponent,
    LaptopComponent,
    MobileComponent,
    TelevisionComponent,
    WashingmachineComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    ServicesComponent,
    ProfileComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
