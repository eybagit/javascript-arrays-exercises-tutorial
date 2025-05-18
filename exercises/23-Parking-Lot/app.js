let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]



function getParkingLotState(parkingState) {
    // Aplanar la matriz y filtrar solo los slots válidos (1 y 2)
    const allSlots = parkingState.flat().filter(slot => slot === 1 || slot === 2);
    
    return {
        totalSlots: allSlots.length,
        availableSlots: allSlots.filter(slot => slot === 2).length,
        occupiedSlots: allSlots.filter(slot => slot === 1).length
    };
}

console.log(getParkingLotState(parkingState));


