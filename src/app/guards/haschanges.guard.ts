import { CanDeactivateFn } from '@angular/router';

export const haschangesGuard: CanDeactivateFn<unknown> = (component: any, currentRoute, currentState, nextState) => {
  console.log(component, currentRoute, currentState)
  if (component.formHasChanges) {
    alert('please save the page before you leave this route')
    return false;
  } else {
    return true;
  }
};
