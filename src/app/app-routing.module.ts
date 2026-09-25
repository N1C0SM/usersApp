const routes: Routes = [
{
path: 'users',
loadChildren: () => import('./pages/users/users.module')
.then(m => m.UsersPageModule)
}
];