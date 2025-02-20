export class Rover {
    boardX: number;
    boardY: number;
    xCoord: number;
    yCoord: number;
    direction: string;

    constructor(boardX: number, boardY: number, xCoord: number, yCoord: number, direction: string) {
        this.boardX = boardX;
        this.boardY = boardY;
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.direction = direction;
    }

    getPosition(): string {
        return `${this.xCoord} ${this.yCoord} ${this.direction}`
    }

    move(instructions: string): string {
        try {
            for(const instruction of instructions) {
                if(instruction == 'M') {
                    this.moveForwards()
                } else if ( instruction == 'L') {
                    this.turnLeft()
                } else if (instruction == 'R') {
                    this.turnRight()
                }else{ 
                    throw new Error("incorrect command")
                }
            }
        } catch (error) {
            console.error(error)
        }

        return this.getPosition();
    }

    private moveForwards() {
        switch(this.direction) {
            case 'N': {
                this.validateMove(this.yCoord + 1, this.boardY);

                this.yCoord += 1;
                break;
            }
            case 'W': {
                this.validateMove(this.xCoord - 1, this.boardX);

                this.xCoord -= 1;
                break;
            }
            case 'S': {
                this.validateMove(this.yCoord - 1, this.boardY);

                this.yCoord -= 1;
                break;
            }
            case 'E': {
                this.validateMove(this.xCoord + 1, this.boardX);

                this.xCoord += 1;
                break;
            }
        }
    }

    private turnLeft() {
        switch(this.direction) {
            case 'N': this.direction = 'W'; break;
            case 'W': this.direction = 'S'; break;
            case 'S': this.direction = 'E'; break;
            case 'E': this.direction = 'N'; break;
        }
    }

    private turnRight() {
        switch(this.direction) {
            case 'N': this.direction = 'E'; break;
            case 'E': this.direction = 'S'; break;
            case 'S': this.direction = 'W'; break;
            case 'W': this.direction = 'N'; break;
        }
    }

    private validateMove(newCoord: number, boardCoord: number) {
        if((newCoord > boardCoord) || newCoord < 0) {
            throw new Error("You cannot move off the board")
        }
    }
}

export class Board {
    x: number;
    y: number;
    rovers: Set<string>;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.rovers = new Set;
    }
}