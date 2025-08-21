export function getTitleName(path: string): string {
   if (path && path === "/") return 'Dashboard - Home';

   const cleanedPath = path.startsWith('/') ? path.slice(1) : path;
   const formattedPath = cleanedPath.charAt(0).toUpperCase() + cleanedPath.slice(1);

   return `Dashboard - ${formattedPath}`;
}