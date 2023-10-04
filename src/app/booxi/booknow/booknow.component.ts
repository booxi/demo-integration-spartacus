import { Component } from '@angular/core';
import { CurrentProductService } from "@spartacus/storefront";
import { Observable } from "rxjs";
import { Product } from "@spartacus/core";

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.scss']
})
export class BooknowComponent {

  // A reference to the product being displayed so that it can be used in the component template.
  product$: Observable<Product | null> = this.currentProductService.getProduct();

  // Add a service that returns an observable of the current product,
  // using the 'CurrentProductService' from Spartacus.
  constructor(private currentProductService: CurrentProductService) {  }

  // Handles the 'Book Now' button click.
  openBookNow() {

    // Open the BookNow widget.
    // Multiple parameters can be passed here.
    // See details here: https://www.booxi.com/booknow/demo.html
    BookNow.open({
      // The API key that can be found in the Booxi Back Office's business details page.
      apiKey: '{YOUR_API_KEY}',

      // The id of the iframe that will be created.
      // The style for this ID is required to be defined in the main 'styles.scss' file of the project.
      iframeId: 'booxi_booknow_iframe_id'
    });
  }
}
