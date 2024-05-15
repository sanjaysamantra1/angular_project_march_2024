import { CanActivateChildFn } from '@angular/router';

export const employeeGuard: CanActivateChildFn = (childRoute, state) => {
  let role = 'employeer';

  if (role === 'employee') {
    return true;
  } else {
    alert('You are an employeer, you dont have access to this route');
    return false;
  }
};
