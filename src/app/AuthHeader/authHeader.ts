import { HttpHeaders } from "@angular/common/http";

export const authToken = () => {
    const authToken = localStorage.getItem('authToken');
    return new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });
  };
