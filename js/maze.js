   
var mazeArray =[
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], //0
        [1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1], //1
        [1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1], //2
        [1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1], //3
        [1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1], //4
        [1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1], //5
        [1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1], //6
        [1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1], //7
        [1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1], //8
        [1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1], //9
        [1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1], //10
        [1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1], //11
        [1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1], //12
        [1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0], //13
        [1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1], //14
        [1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1], //15
        [1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1], //16
        [1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1], //17
        [1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1], //18
        [1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1], //19
        [1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1], //20
        [1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1], //21
        [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1], //22
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]  //23
    ];

function printMaze(){
    
   var defVoxel = new THREE.Mesh( cubeGeo, cubeMaterial );
            defVoxel.position.y = 25;
            defVoxel.position.x = -625;
            defVoxel.position.z = -575;
            
    /* Print Maze */
    
    for(i = 0; i < 24; i++){ 
        for(j = 0; j < 24; j++){
            var voxel = new THREE.Mesh( cubeGeo, cubeMaterial );
            var plane = new THREE.Mesh(planeGeo, planeMaterial);
            voxel.position.y = 25;
            voxel.position.z = defVoxel.position.z;
            plane.position.z = defVoxel.position.z ;
            plane.position.y = 0;
            if(mazeArray[i][j] == 1){
                voxel.position.x = defVoxel.position.x + 50; 
                defVoxel.position.x += 50;
                scene.add(voxel);
            }
            else if(mazeArray[i][j] == 0){
                plane.position.x = defVoxel.position.x+50;
//                plane.rotation.x+= 0.5;
//                console.log(THREE.Math.degToRad(90));
                voxel.position.x = defVoxel.position.x + 50; 
                defVoxel.position.x += 50;
                scene.add(plane);
                
            }
        }
        //voxel.position.z = defVoxel.position.z + 50;
        defVoxel.position.z +=50; 
        defVoxel.position.x = -625;
    }
    
}

function checkCollision(playerModel, arrowKey, currentPos){
  
    
    if(arrowKey == 37 && playerModel.position.x-50 >= -575) {
      if(mazeArray[currentPos[0]][currentPos[1]-1] == 0){
           console.log('Move Left' );
           playerModel.position.x -= 50;
           currentPos[1]-=1;
      }    
    }
    else if(arrowKey == 38 && playerModel.position.z-50 >= -575){
        if(mazeArray[currentPos[0]-1][currentPos[1]] == 0){
        
            console.log('Move Up');
            playerModel.position.z -= 50;
            currentPos[0]-=1;
            
        }
    }
    else if(arrowKey == 39 && playerModel.position.x+50 <= 575) {
       if(mazeArray[currentPos[0]][currentPos[1]+1]==0){
            console.log('Move Right');
            playerModel.position.x += 50;
            currentPos[1]+=1;
       }
    }
    else if(arrowKey == 40 && playerModel.position.z+50 <= 575){
       if(mazeArray[currentPos[0]+1][currentPos[1]] == 0){
            console.log('Move Down');
            playerModel.position.z += 50;
            currentPos[0]+=1;

       }
        
    }
    
    render();
    return currentPos; 
} 
