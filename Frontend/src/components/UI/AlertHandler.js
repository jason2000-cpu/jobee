import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


export const handleConfirm = () => {
	Swal.fire({
		title: "Are you sure?",
		text: "You won't be able to revert this!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Yes, delete it!"
		}).then((result) => {
		if (result.isConfirmed) {
			Swal.fire({
			title: "Deleted!",
			text: "Your file has been deleted.",
			icon: "success"
			});
		}
		})
}

export const handleSuccess = (text) => {
	Swal.fire({
		title: "Success",
		text: text,
		icon: "success"
	  });
}


export const handleFail = (text) => {
	Swal.fire({
		icon: "error",
		title: "Error",
		text: text,
	  });
}

export const handleInfor = (text) => {
	Swal.fire({
		title: "Info",
		text: text,
		icon: "info"
	  });
}