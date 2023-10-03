import { Injectable } from '@angular/core';
import { SecureStorageServiceModule } from './secure-storage.service.module';

@Injectable({
  providedIn: SecureStorageServiceModule,
})
export class SecureStorageService {
  saveData(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getData(key: string): string {
    const data = localStorage.getItem(key) || '';
    return data;
  }

  removeData(key: string): void {
    localStorage.removeItem(key);
  }

  clearData(): void {
    localStorage.clear();
  }
}
