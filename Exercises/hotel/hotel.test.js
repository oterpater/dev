const {Room, Hotel} = require("./hotel");

describe("Hotel", () => {
	
	it("should create a hotel correctly", () => {
		const myHotel = new Hotel(2);
		expect(myHotel).toMatchObject( { hotelRooms: 2, rooms: [] } );
	});
	
	it("should create the correct number of rooms", () => {
		const myHotel = new Hotel(2);
		expect(myHotel.rooms).toHaveLength(2);
		expect(myHotel.rooms[0]).toBeInstanceOf(Room);
	});

	it("should do checkin correctly", () => {
		const myHotel = new Hotel(2);
		expect(myHotel.checkin(1,3)).toBeThruty();
	});

	it("should do checkin correctly", () => {
		const myHotel = new Hotel(2);
		myHotel.checkin(1,3);
		expect(myHotel.checkin(1,3)).toBeFalse();
	});

	it("should do checkout correctly", () => {
		const myHotel = new Hotel(2);
		myHotel.createRooms();
		myHotel.checkin(1,3);
		expect(myHotel.checkout(1)).toBe(true);
	});

	it("should do checkout correctly", () => {
		const myHotel = new Hotel(2);
		myHotel.createRooms();
		myHotel.checkin(1,3);
		myHotel.checkout(1);
		expect(myHotel.checkout(1)).toBe(false);
	});

	it("should give Available Rooms", () => {
		myHotel.createRooms();
		myHotel.checkin(1,3);
		expect(myHotel.getAvailableRooms()).toHaveLength(1);
	});

	it("should give Occupied Rooms", () => {
		myHotel.createRooms();
		myHotel.checkin(1,3);
		expect(myHotel.getAvailableRooms()).toHaveLength(1);
	});

});

// CÓDIGO SIMÓN
// const { Room, Hotel } = require('./index');
// ​
// describe('Hotel', () => {
//   it('should create the correct number of rooms', () => {
//     const rooms = Math.ceil(Math.random() * 1000);
//     const hotel = new Hotel(rooms);
// ​
//     expect(hotel.rooms).toHaveLength(rooms);
//     expect(hotel.rooms[0]).toBeInstanceOf(Room);
//   });
// ​
//   it('should change the correct room availability and guests number when checking in', () => {
//     const hotel = new Hotel(4);
// ​
//     expect(hotel.checkin(1, 3)).toBeTruthy();
// ​
//     const room = hotel.getOccupiedRooms()[0];
// ​
//     expect(room.number).toBe(1);
//     expect(room.available).toBeFalsy();
//     expect(room.guests).toBe(3);
//   });
// ​
//   it('should change the correct room availability and guests number when checking out', () => {
//     const hotel = new Hotel(4);
// ​
//     hotel.checkin(1, 3);
//     expect(hotel.checkout(1)).toBeTruthy();
// ​
//     const room = hotel.getAvailableRooms().filter(room => room.number === 1)[0];
// ​
//     expect(room.number).toBe(1);
//     expect(room.available).toBeTruthy();
//     expect(room.guests).toBe(0);
//   });
// ​
//   it('should not change a room that is unavailable or room doesn\'t exist when checking in', () => {
//     const hotel = new Hotel(4);
// ​
//     hotel.checkin(1, 1);
//     expect(hotel.checkin(1, 1)).toBeFalsy();
//     expect(hotel.checkin(10, 1)).toBeFalsy();
//   });
// ​
//   it('should not change a room that is available or room doesn\'t exist when checking out', () => {
//     const hotel = new Hotel(4);
// ​
//     expect(hotel.checkout(1, 1)).toBeFalsy();
//     expect(hotel.checkout(10, 1)).toBeFalsy();
//   });
// ​
//   it('should retrieve the correct number of available rooms', () => {
//     const hotel = new Hotel(2);
// ​
//     expect(hotel.getAvailableRooms()).toHaveLength(2);
// ​
//     hotel.checkin(1,1);
//     expect(hotel.getAvailableRooms()).toHaveLength(1);
// ​
//     hotel.checkin(2,1);
//     expect(hotel.getAvailableRooms()).toHaveLength(0);
//   });
// ​
//   it('should retrieve the correct number of occupied rooms', () => {
//     const hotel = new Hotel(2);
// ​
//     expect(hotel.getOccupiedRooms()).toHaveLength(0);
// ​
//     hotel.checkin(1,1);
//     expect(hotel.getOccupiedRooms()).toHaveLength(1);
// ​
//     hotel.checkin(2,1);
//     expect(hotel.getOccupiedRooms()).toHaveLength(2);
//   });
// });