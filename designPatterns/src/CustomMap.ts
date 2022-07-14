export interface Mappable {
	markerContent(): string;
	color: string;
	location: {
		lat: number;
		lng: number;
	};
}

export class CustomMap {
	private googleMap: google.maps.Map;

	constructor(divId: string) {
		this.googleMap = new google.maps.Map(document.getElementById(divId), {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0,
			},
		});
	}

	addMarker(position: Mappable) {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: position.location.lat,
				lng: position.location.lng,
			},
		});

		marker.addListener("click", () => {
			const infoWindow = new google.maps.InfoWindow({
				content: position.markerContent(),
			});

			infoWindow.open(this.googleMap, marker);
		});
	}

	/*
	 *  // looks at both types and only offers access to what
	 *  // they share ex. location
	 *  // This has the issue of tightly coupling classes
	 *  // it's also difficult to expand this
	 *  addMarker(position: User | Company) {
	 *    new google.maps.Marker({
	 *      map: this.googleMap,
	 *      position: {
	 *        lat: position.location.lat,
	 *        lng: position.location.lng,
	 *      },
	 *    });
	 *  }
	 *
	 */
	//addUserMarker(user: User): void {
	//new google.maps.Marker({
	//map: this.googleMap,
	//position: {
	//lat: user.location.lat,
	//lng: user.location.lng,
	//},
	//});
	//}

	//addCompanyMarker(company: Company): void {
	//new google.maps.Marker({
	//map: this.googleMap,
	//position: {
	//lat: company.location.lat,
	//lng: company.location.lng,
	//},
	//});
	//}
}
