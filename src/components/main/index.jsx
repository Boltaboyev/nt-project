// "use client"

// import {
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   Avatar,
//   Chip,
//   IconButton,
//   Tooltip,
//   Box,
//   Fab,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material"
// import { ContentCopy, Delete, Edit, Add } from "@mui/icons-material"

// export default function MainContent({ isMobile, copied, handleCopyUsername }) {
//   const theme = useTheme()
//   const isTablet = useMediaQuery(theme.breakpoints.down("lg"))

//   return (
//     <div className={`flex-1 ${isMobile ? "pt-16" : ""} ${isMobile ? "p-4" : isTablet ? "p-6" : "p-8"}`}>
//       <div
//         className="min-h-screen bg-cover bg-center bg-no-repeat relative rounded-2xl overflow-hidden"
//         style={{
//           backgroundImage: `linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%), url('/placeholder.svg?height=800&width=1200')`,
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/20"></div>

//         {/* Profile Card */}
//         <div className={`relative z-10 ${isMobile ? "pt-6" : isTablet ? "pt-8" : "pt-12"}`}>
//           <Card
//             className={`${isMobile ? "mx-2" : isTablet ? "max-w-3xl mx-auto" : "max-w-4xl mx-auto"} shadow-2xl border-0 bg-white`}
//           >
//             <CardContent className={`${isMobile ? "p-4" : isTablet ? "p-6" : "p-10"}`}>
//               {/* Header Section */}
//               <div
//                 className={`flex ${isMobile ? "flex-col space-y-4" : "justify-between items-start"} ${isMobile ? "mb-6" : isTablet ? "mb-8" : "mb-10"}`}
//               >
//                 <div>
//                   <Typography
//                     variant={isMobile ? "h4" : isTablet ? "h3" : "h3"}
//                     className="font-bold text-gray-800 mb-2"
//                   >
//                     Your Profile
//                   </Typography>
//                   <Typography variant="body1" className={`text-gray-600 ${isMobile ? "text-sm" : ""}`}>
//                     Manage your account settings and preferences
//                   </Typography>
//                 </div>

//                 <div className={`flex ${isMobile ? "flex-col space-y-2" : "space-x-3"} ${isMobile ? "w-full" : ""}`}>
//                   <Tooltip title={copied ? "Copied!" : "Copy Username"}>
//                     <Button
//                       variant="contained"
//                       startIcon={<ContentCopy />}
//                       onClick={handleCopyUsername}
//                       className={`${
//                         copied
//                           ? "bg-gradient-to-r from-green-500 to-green-600"
//                           : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
//                       } rounded-xl ${isMobile ? "py-2 px-4" : isTablet ? "px-4 py-2" : "px-6 py-3"} shadow-lg transition-all duration-300 ${isMobile ? "w-full" : ""}`}
//                       sx={{
//                         textTransform: "none",
//                         fontWeight: 600,
//                         fontSize: isMobile ? "0.875rem" : "1rem",
//                       }}
//                     >
//                       {copied ? "Copied!" : "Copy Username"}
//                     </Button>
//                   </Tooltip>
//                   <Button
//                     variant="contained"
//                     startIcon={<Delete />}
//                     className={`bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-xl ${isMobile ? "py-2 px-4" : isTablet ? "px-4 py-2" : "px-6 py-3"} shadow-lg transition-all duration-300 ${isMobile ? "w-full" : ""}`}
//                     sx={{
//                       textTransform: "none",
//                       fontWeight: 600,
//                       fontSize: isMobile ? "0.875rem" : "1rem",
//                     }}
//                   >
//                     Delete Account
//                   </Button>
//                 </div>
//               </div>

//               {/* Profile Section */}
//               <div
//                 className={`flex ${isMobile ? "flex-col items-center space-y-6" : isTablet ? "flex-col items-center space-y-6" : "items-start space-x-8"}`}
//               >
//                 <div className="relative">
//                   <Avatar
//                     className={`${isMobile ? "w-32 h-32" : isTablet ? "w-36 h-36" : "w-40 h-40"} bg-gradient-to-br from-red-500 to-red-600 text-white shadow-2xl border-4 border-white`}
//                   >
//                     <span className={`${isMobile ? "text-5xl" : isTablet ? "text-6xl" : "text-7xl"} font-bold`}>O</span>
//                   </Avatar>
//                   <div
//                     className={`absolute -bottom-2 -right-2 ${isMobile ? "w-6 h-6" : "w-8 h-8"} bg-green-500 rounded-full border-4 border-white shadow-lg`}
//                   ></div>
//                 </div>

//                 <div className={`flex-1 ${isMobile || isTablet ? "text-center" : "pt-4"} ${isMobile ? "w-full" : ""}`}>
//                   <div
//                     className={`flex ${isMobile || isTablet ? "flex-col items-center space-y-3" : "items-center space-x-4"} mb-4`}
//                   >
//                     <Typography variant={isMobile ? "h5" : isTablet ? "h4" : "h4"} className="font-bold text-gray-800">
//                       Otabek
//                     </Typography>
//                     <div className={`flex items-center ${isMobile || isTablet ? "space-x-2" : "space-x-4"}`}>
//                       <Chip
//                         label="Active"
//                         className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 font-semibold shadow-sm"
//                         size={isMobile ? "small" : "medium"}
//                       />
//                       <Tooltip title="Edit Profile">
//                         <IconButton className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
//                           <Edit fontSize={isMobile ? "small" : "medium"} />
//                         </IconButton>
//                       </Tooltip>
//                     </div>
//                   </div>

//                   <Typography
//                     variant={isMobile ? "body1" : "h6"}
//                     className={`text-gray-600 ${isMobile || isTablet ? "mb-6" : "mb-6"}`}
//                   >
//                     @otabek
//                   </Typography>

//                   {/* Stats Grid */}
//                   <div
//                     className={`grid ${isMobile ? "grid-cols-1 gap-3" : isTablet ? "grid-cols-2 gap-4" : "grid-cols-3 gap-6"}`}
//                   >
//                     <Box
//                       className={`bg-gradient-to-r from-blue-50 to-blue-100 ${isMobile ? "p-3" : "p-4"} rounded-xl border border-blue-200/50`}
//                     >
//                       <Typography variant={isMobile ? "h6" : "h6"} className="font-bold text-blue-800">
//                         24
//                       </Typography>
//                       <Typography variant={isMobile ? "caption" : "body2"} className="text-blue-600">
//                         Groups Joined
//                       </Typography>
//                     </Box>
//                     <Box
//                       className={`bg-gradient-to-r from-purple-50 to-purple-100 ${isMobile ? "p-3" : "p-4"} rounded-xl border border-purple-200/50`}
//                     >
//                       <Typography variant={isMobile ? "h6" : "h6"} className="font-bold text-purple-800">
//                         156
//                       </Typography>
//                       <Typography variant={isMobile ? "caption" : "body2"} className="text-purple-600">
//                         Connections
//                       </Typography>
//                     </Box>
//                     <Box
//                       className={`bg-gradient-to-r from-green-50 to-green-100 ${isMobile ? "p-3" : "p-4"} rounded-xl border border-green-200/50 ${isMobile ? "col-span-1" : isTablet ? "col-span-2" : "col-span-1"}`}
//                     >
//                       <Typography variant={isMobile ? "h6" : "h6"} className="font-bold text-green-800">
//                         89%
//                       </Typography>
//                       <Typography variant={isMobile ? "caption" : "body2"} className="text-green-600">
//                         Profile Complete
//                       </Typography>
//                     </Box>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>

//       {/* Mobile FAB for quick actions */}
//       {isMobile && (
//         <Fab
//           color="primary"
//           aria-label="add"
//           className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg"
//           onClick={() => {
//             /* Handle quick action */
//           }}
//         >
//           <Add />
//         </Fab>
//       )}
//     </div>
//   )
// }
