import { CanActivateFn } from '@angular/router';

export const teacherGuard: CanActivateFn = (route, state) => {
  // const userRole = sessionStorage.userDetails.userRole;
  let myRole = 'student'

  if (myRole === 'teacher') {
    return true;
  } else {
    alert("Sorry, You don't have access to this page");
    return false;
  }
};
