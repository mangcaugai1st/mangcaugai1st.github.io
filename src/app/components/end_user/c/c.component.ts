import { Component } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent {
    temperature: number = 0;
    selectedUnit: string = "celsius";
    convertedTemperature: any;

    convertTemperature() {
        if (this.selectedUnit === 'celsius') {
            this.convertedTemperature = (this.temperature * 9/5) + 32 + "°F";
        }
        else {
            this.convertedTemperature = (this.temperature - 32) * 5/9 + "°C";
        }
    }

  isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }
}
