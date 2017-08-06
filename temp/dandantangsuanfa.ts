?// Action script...

// [onClipEvent of sprite 399 in frame 9]
onClipEvent (load)
{
    p = _global.player;
    if (p == "bomberBlue")
    {
        gotoAndStop(1);
    }
    else if (p == "bomberGreen")
    {
        gotoAndStop(2);
    }
    else if (p == "bomberPurple")
    {
        gotoAndStop(3);
    }
    else if (p == "bomberOrange")
    {
        gotoAndStop(4);
    } // end else if
}

// [onClipEvent of sprite 27 in frame 9]
onClipEvent (load)
{
    if (_global.twoPlayer)
    {
        timeLeft = 7200;
    } // end if
}

// [onClipEvent of sprite 27 in frame 9]
onClipEvent (enterFrame)
{
    if (_global.step >= 23)
    {
        _global.step = 0;
        _global.sec = _global.sec + 1;
    } // end if
    if (_global.sec >= 60)
    {
        _global.sec = 0;
        _global.minute = _global.minute + 1;
    } // end if
    if (_global.minute >= 60)
    {
        _global.minute = 0;
        _global.hour = _global.hour + 1;
    } // end if
    if (_global.sec < 10)
    {
        secplus = "0";
    }
    else
    {
        secplus = "";
    } // end else if
    if (_global.minute < 10)
    {
        minplus = "0";
    }
    else
    {
        minplus = "";
    } // end else if
    if (_global.hour < 10)
    {
        hourplus = "0";
    }
    else
    {
        hourplus = "";
    } // end else if
    --timeLeft;
    _global.timer = hourplus + Math.round(_global.hour) + ":" + minplus + Math.round(_global.minute) + ":" + secplus + Math.round(_global.sec);
    if (_global.twoPlayer)
    {
        _root.timer = Math.round(timeLeft / 30);
    }
    else
    {
        _root.timer = _global.timer;
    } // end else if
    ++_global.time;
    ++_global.step;
    _root.detectKeys();
    if (_global.twoPlayer == true)
    {
        _root.detectKeys2();
    } // end if
    _root.enemyBrain();
    _root.checkKilled(_root.char);
    if (_global.twoPlayer)
    {
        _root.checkKilled(_root.char2);
    }
    else
    {
        _root.checkKilled(_root.game.enemy0);
    } // end else if
    if (_global.enemyNumb >= 2)
    {
        _root.checkKilled(_root.game.enemy1);
        if (_global.enemyNumb >= 3)
        {
            _root.checkKilled(_root.game.enemy2);
        } // end if
    } // end if
    _root.checkVictory();
    _root.showUnlocked = _global.score;
    if (_root.char.clip._x)
    {
        _root.p1Speed = Math.round(_root.char.speedUp / 30);
        _root.p1BombF = _root.char.bombForce;
        if (_root.char.bombsLeft > _root.p1BombL || !_root.p1BombL)
        {
            _root.p1BombL = _root.char.bombsLeft;
        } // end if
    }
    else
    {
        _root.p1Speed = 0;
        _root.p1BombsL = 0;
        _root.p1BombF = 0;
        _root.char.bombsLeft = 0;
    } // end else if
    _root.p2Speed = Math.round(_root.game.enemy2.speedUp / 30);
    _root.p2BombF = _root.game.enemy2.bombForce;
    if (_root.game.clip.enemy0._x && !_global.twoPlayer)
    {
        if (_root.game.enemy0.bombsLeft > _root.p2BombL || !_root.p2BombL)
        {
            _root.p2BombL = _root.game.enemy0.bombsLeft;
        } // end if
        _root.p2Speed = Math.round(_root.game.enemy0.speedUp / 30);
        _root.p2BombF = _root.game.enemy0.bombForce;
    }
    else if (_root.char2.clip._x && _global.twoPlayer)
    {
        if (_root.char2.bombsLeft > _root.p2BombL || !_root.p2BombL)
        {
            _root.p2BombL = _root.char2.bombsLeft;
        } // end if
        _root.p2Speed = Math.round(_root.char2.speedUp / 30);
        _root.p2BombF = _root.char2.bombForce;
    }
    else
    {
        _root.p2Speed = 0;
        _root.p2BombL = 0;
        _root.p2BombF = 0;
        _root.char2.bombsLeft = 0;
        _root.game.enemy0.bombsLeft = 0;
    } // end else if
    if (_root.game.clip.enemy1._x)
    {
        if (_root.game.enemy1.bombsLeft > _root.p3BombL || !_root.p3BombL)
        {
            _root.p3BombL = _root.game.enemy1.bombsLeft;
        } // end if
        _root.p3Speed = Math.round(_root.game.enemy1.speedUp / 30);
        _root.p3BombF = _root.game.enemy1.bombForce;
    }
    else
    {
        _root.p3Speed = 0;
        _root.p3BombL = 0;
        _root.p3BombF = 0;
        _root.game.enemy1.bombsLeft = 0;
    } // end else if
    if (_root.game.clip.enemy2._x)
    {
        if (_root.game.enemy2.bombsLeft > _root.p4BombL || !_root.p4BombL)
        {
            _root.p4BombL = _root.game.enemy2.bombsLeft;
        } // end if
        _root.p4Speed = Math.round(_root.game.enemy2.speedUp / 30);
        _root.p4BombF = _root.game.enemy2.bombForce;
    }
    else
    {
        _root.p4Speed = 0;
        _root.p4BombL = 0;
        _root.p4BombF = 0;
        _root.game.enemy2.bombsLeft = 0;
    } // end else if
    if (_global.score >= 50)
    {
        _global.score = _global.score - 50;
        ++_global.lifes;
    } // end if
    if (timeLeft <= 0)
    {
        gotoAndStop(20);
    } // end if
    if (_global.twoPlayer)
    {
        _root.showUnlocked = "Available time:";
    } // end if
}

// [onClipEvent of sprite 399 in frame 9]
onClipEvent (load)
{
    p = _global.player2;
    if (p == "bomberBlue")
    {
        gotoAndStop(1);
    }
    else if (p == "bomberGreen")
    {
        gotoAndStop(2);
    }
    else if (p == "bomberPurple")
    {
        gotoAndStop(3);
    }
    else if (p == "bomberOrange")
    {
        gotoAndStop(4);
    } // end else if
}

// [onClipEvent of sprite 399 in frame 9]
onClipEvent (load)
{
    p = _global.player3;
    if (p == "bomberBlue")
    {
        gotoAndStop(1);
    }
    else if (p == "bomberGreen")
    {
        gotoAndStop(2);
    }
    else if (p == "bomberPurple")
    {
        gotoAndStop(3);
    }
    else if (p == "bomberOrange")
    {
        gotoAndStop(4);
    } // end else if
}

// [onClipEvent of sprite 399 in frame 9]
onClipEvent (load)
{
    p = _global.player4;
    if (p == "bomberBlue")
    {
        gotoAndStop(1);
    }
    else if (p == "bomberGreen")
    {
        gotoAndStop(2);
    }
    else if (p == "bomberPurple")
    {
        gotoAndStop(3);
    }
    else if (p == "bomberOrange")
    {
        gotoAndStop(4);
    } // end else if
}

// [Action in Frame 9]
function buildMap(map)
{
    _root.attachMovie("empty", "tiles", ++d);
    game.clip = _root.tiles;
    var _loc7 = map[0].length;
    var _loc8 = map.length;
    for (var _loc5 = 0; _loc5 < _loc8; ++_loc5)
    {
        for (var _loc4 = 0; _loc4 < _loc7; ++_loc4)
        {
            var _loc3 = "t_" + _loc5 + "_" + _loc4;
            game[_loc3] = new game["Tile" + map[_loc5][_loc4]]();
            game.clip.attachMovie("tile", _loc3, 500 + _loc5 * 20 + _loc4);
            game.clip[_loc3]._x = _loc4 * game.tileW;
            game.clip[_loc3]._y = _loc5 * game.tileH;
            if ("Tile" + map[_loc5][_loc4] != "Tile4")
            {
                game[_loc3].xtile = game.clip[_loc3]._x / game.tileW;
                game[_loc3].ytile = game.clip[_loc3]._y / game.tileH;
            } // end if
            if ("Tile" + map[_loc5][_loc4] != "Tile3")
            {
                game.clip[_loc3].gotoAndStop(game[_loc3].frame);
                continue;
            } // end if
            if (random(2) == 1)
            {
                game.clip[_loc3].gotoAndStop(game[_loc3].frame);
                continue;
            } // end if
            game.clip[_loc3].gotoAndStop(1);
            game[_loc3].frame = 1;
            game[_loc3].walkable = 1;
            game[_loc3].walkableComp = 1;
        } // end of for
        for (k = 0; k < _global.enemyNumb; k++)
        {
            _loc3 = "enemy" + k;
            game[_loc3] = new game.Enemy();
            if (k == 0)
            {
                game.clip.attachMovie(player2, _loc3, 10001 + k);
            }
            else if (k == 1)
            {
                game.clip.attachMovie(player3, _loc3, 10001 + k);
            }
            else
            {
                game.clip.attachMovie(player4, _loc3, 10001 + k);
            } // end else if
            game[_loc3].clip = game.clip[_loc3];
            game[_loc3].playerFire = _root["playerFire" + (k + 2)];
            game[_loc3].turning = 30;
            game[_loc3].bombsLeft = 1;
            game[_loc3].id = k + 2;
            game[_loc3].xMove = 1;
            game[_loc3].yMove = 0;
            game[_loc3].speedUp = 0;
            game[_loc3].xtile = enemies[k][0];
            game[_loc3].ytile = enemies[k][1];
            game[_loc3].width = game.clip[_loc3]._width / 2;
            game[_loc3].height = game.clip[_loc3]._height / 2;
            game[_loc3].x = game[_loc3].xtile * game.tileW + game.tileW / 2;
            game[_loc3].y = game[_loc3].ytile * game.tileH + game.tileH / 2;
            game[_loc3].clip._x = game[_loc3].x;
            game[_loc3].clip._y = game[_loc3].y;
        } // end of for
    } // end of for
    game.clip.attachMovie(player, "char", 10000);
    char.playerFire = playerFire;
    char.clip = game.clip.char;
    char.id = 1;
    char.x = char.xtile * game.tileW + game.tileW / 2;
    char.y = char.ytile * game.tileW + game.tileW / 2;
    char.width = char.clip._width / 2;
    char.height = char.clip._height / 2;
    removeMovieClip (char.clip.mask);
    char.clip._x = char.x;
    char.clip._y = char.y;
    char.speedUp = 0;
    char.bombsLeft = 1;
    char.bombForce = 1;
    if (_global.twoPlayer == true)
    {
        removeMovieClip (game.clip.enemy0);
        game.clip.attachMovie(player2, "char2", 9999);
        char2.playerFire = playerFire2;
        char2.clip = game.clip.char2;
        char2.id = 2;
        char2.x = char2.xtile * game.tileW + game.tileW / 2;
        char2.y = char2.ytile * game.tileW + game.tileW / 2;
        char2.width = char2.clip._width / 2;
        char2.height = char2.clip._height / 2;
        removeMovieClip (char2.clip.mask);
        char2.clip._x = char2.x;
        char2.clip._y = char2.y;
        char2.speedUp = 0;
        char2.bombsLeft = 1;
        char2.bombForce = 1;
    } // end if
} // End of the function
function getMyCorners1(x, y, ob)
{
    ob.downY = Math.floor((y + ob.height - 1) / game.tileH);
    ob.upY = Math.floor((y - ob.height) / game.tileH);
    ob.leftX = Math.floor((x - ob.width) / game.tileW);
    ob.rightX = Math.floor((x + ob.width - 1) / game.tileW);
    ul = game["t_" + ob.upY + "_" + ob.leftX];
    if ((ul.allowId == ob.id || !ul.allowId) && !ul.onFire)
    {
        ob.upleft = ul.walkable;
    }
    else
    {
        ob.upleft = 0;
    } // end else if
    dl = game["t_" + ob.downY + "_" + ob.leftX];
    if ((dl.allowId == ob.id || !dl.allowId) && !dl.onFire)
    {
        ob.downleft = dl.walkable;
    }
    else
    {
        ob.downleft = 0;
    } // end else if
    ur = game["t_" + ob.upY + "_" + ob.rightX];
    if ((ur.allowId == ob.id || !ur.allowId) && !ur.onFire)
    {
        ob.upright = ur.walkable;
    }
    else
    {
        ob.upright = 0;
    } // end else if
    dr = game["t_" + ob.downY + "_" + ob.rightX];
    if ((dr.allowId == ob.id || !dr.allowId) && !dr.onFire)
    {
        ob.downright = dr.walkable;
    }
    else
    {
        ob.downright = 0;
    } // end else if
} // End of the function
function getMyCorners(x, y, ob)
{
    ob.downY = Math.floor((y + ob.height - 1) / game.tileH);
    ob.upY = Math.floor((y - ob.height) / game.tileH);
    ob.leftX = Math.floor((x - ob.width) / game.tileW);
    ob.rightX = Math.floor((x + ob.width - 1) / game.tileW);
    ul = game["t_" + ob.upY + "_" + ob.leftX];
    if (ul.allowId == ob.id || !ul.allowId)
    {
        ob.upleft = ul.walkable;
    }
    else
    {
        ob.upleft = 0;
    } // end else if
    dl = game["t_" + ob.downY + "_" + ob.leftX];
    if (dl.allowId == ob.id || !dl.allowId)
    {
        ob.downleft = dl.walkable;
    }
    else
    {
        ob.downleft = 0;
    } // end else if
    ur = game["t_" + ob.upY + "_" + ob.rightX];
    if (ur.allowId == ob.id || !ur.allowId)
    {
        ob.upright = ur.walkable;
    }
    else
    {
        ob.upright = 0;
    } // end else if
    dr = game["t_" + ob.downY + "_" + ob.rightX];
    if (dr.allowId == ob.id || !dr.allowId)
    {
        ob.downright = dr.walkable;
    }
    else
    {
        ob.downright = 0;
    } // end else if
} // End of the function
function getMyCorners2(x, y, ob)
{
    ob.downY = Math.floor((y + ob.height - 1) / game.tileH);
    ob.upY = Math.floor((y - ob.height) / game.tileH);
    ob.leftX = Math.floor((x - ob.width) / game.tileW);
    ob.rightX = Math.floor((x + ob.width - 1) / game.tileW);
    ob.upleft = game["t_" + ob.upY + "_" + ob.leftX].frame;
    ob.downleft = game["t_" + ob.downY + "_" + ob.leftX].frame;
    ob.upright = game["t_" + ob.upY + "_" + ob.rightX].frame;
    ob.downright = game["t_" + ob.downY + "_" + ob.rightX].frame;
} // End of the function
function getMyCorners3(x, y, ob)
{
    ob.downY = Math.floor((y + ob.height - 1) / game.tileH);
    ob.upY = Math.floor((y - ob.height) / game.tileH);
    ob.leftX = Math.floor((x - ob.width) / game.tileW);
    ob.rightX = Math.floor((x + ob.width - 1) / game.tileW);
    ob.upleft = game["t_" + ob.upY + "_" + ob.leftX].walkableComp;
    ob.downleft = game["t_" + ob.downY + "_" + ob.leftX].walkableComp;
    ob.upright = game["t_" + ob.upY + "_" + ob.rightX].walkableComp;
    ob.downright = game["t_" + ob.downY + "_" + ob.rightX].walkableComp;
} // End of the function
function getMyCorners4(x, y, ob)
{
    ob.downY = Math.floor((y + ob.height - 1) / game.tileH);
    ob.upY = Math.floor((y - ob.height) / game.tileH);
    ob.leftX = Math.floor((x - ob.width) / game.tileW);
    ob.rightX = Math.floor((x + ob.width - 1) / game.tileW);
} // End of the function
function getMyCorners5(x, y, ob)
{
    ob.downY = Math.floor((y - 4 + ob.height - 1) / game.tileH);
    ob.upY = Math.floor((y + 4 - ob.height) / game.tileH);
    ob.leftX = Math.floor((x + 4 - ob.width) / game.tileW);
    ob.rightX = Math.floor((x - 4 + ob.width - 1) / game.tileW);
    ob.upleft = game["t_" + ob.upY + "_" + ob.leftX].onFire;
    ob.downleft = game["t_" + ob.downY + "_" + ob.leftX].onFire;
    ob.upright = game["t_" + ob.upY + "_" + ob.rightX].onFire;
    ob.downright = game["t_" + ob.downY + "_" + ob.rightX].onFire;
} // End of the function
function getMyCorners6(x, y, ob)
{
    ob.free = 0;
    ob.downY = Math.floor((y - 8 + ob.height - 1) / game.tileH);
    ob.upY = Math.floor((y + 8 - ob.height) / game.tileH);
    ob.leftX = Math.floor((x + 8 - ob.width) / game.tileW);
    ob.rightX = Math.floor((x - 8 + ob.width - 1) / game.tileW);
    ob.upleft = "b_" + ob.upY + "_" + ob.leftX;
    ob.downleft = "b_" + ob.downY + "_" + ob.leftX;
    ob.upright = "b_" + ob.upY + "_" + ob.rightX;
    ob.downright = "b_" + ob.downY + "_" + ob.rightX;
} // End of the function
function placeItem(ytile, xtile, ob)
{
    var _loc3 = Math.floor(random(7) + 1);
    if (_loc3 <= 4)
    {
        name = "i_" + ytile + "_" + xtile;
        game.clip.attachMovie("powerUp", name, ytile * 20 + xtile);
        game["t_" + ytile + "_" + xtile].item = _loc3;
        game.clip[name].gotoAndStop(_loc3);
        game.clip[name]._x = xtile * game.tileW;
        game.clip[name]._y = ytile * game.tileH;
        game[name].xtile = xtile;
        game[name].ytile = ytile;
        name = "";
    } // end if
} // End of the function
function preDetonate(ytile, xtile, ob)
{
    game["t_" + ytile + "_" + xtile].walkableComp = 0;
    for (i = 1; i <= ob.bombForce; i++)
    {
        if (game["t_" + (ytile - i) + "_" + xtile].frame != 2)
        {
            game["t_" + (ytile - i) + "_" + xtile].walkableComp = 0;
            if (game["t_" + (ytile - i) + "_" + xtile].frame == 3 || game["t_" + (ytile - i) + "_" + xtile].frame == 4)
            {
                break;
            } // end if
            continue;
        } // end if
        break;
    } // end of for
    for (i = 1; i <= ob.bombForce; i++)
    {
        if (game["t_" + (ytile + i) + "_" + xtile].frame != 2)
        {
            game["t_" + (ytile + i) + "_" + xtile].walkableComp = 0;
            if (game["t_" + (ytile + i) + "_" + xtile].frame == 3 || game["t_" + (ytile + i) + "_" + xtile].frame == 4)
            {
                break;
            } // end if
            continue;
        } // end if
        break;
    } // end of for
    for (i = 1; i <= ob.bombForce; i++)
    {
        if (game["t_" + ytile + "_" + (xtile - i)].frame != 2)
        {
            game["t_" + ytile + "_" + (xtile - i)].walkableComp = 0;
            if (game["t_" + ytile + "_" + (xtile - i)].frame == 3 || game["t_" + ytile + "_" + (xtile - i)].frame == 4)
            {
                break;
            } // end if
            continue;
        } // end if
        break;
    } // end of for
    for (i = 1; i <= ob.bombForce; i++)
    {
        if (game["t_" + ytile + "_" + (xtile + i)].frame != 2)
        {
            game["t_" + ytile + "_" + (xtile + i)].walkableComp = 0;
            if (game["t_" + ytile + "_" + (xtile + i)].frame == 3 || game["t_" + ytile + "_" + (xtile + i)].frame == 4)
            {
                break;
            } // end if
            continue;
        } // end if
        break;
    } // end of for
} // End of the function
function detonate(ytile, xtile, ob)
{
    name = "f_" + _global.depth;
    game.clip.attachMovie(ob.playerFire, name, 50000 + _global.depth);
    ++_global.depth;
    game.clip[name]._x = xtile * game.tileW + 15;
    game.clip[name]._y = ytile * game.tileH + 15;
    game.clip[name].xtile = xtile;
    game.clip[name].ytile = ytile;
    game.clip[name].player = ob;
    game.clip[name].gotoAndStop(1);
    game["t_" + ytile + "_" + xtile].onFire = 1;
    for (i = 1; i <= ob.bombForce; i++)
    {
        if (game["t_" + (ytile - i) + "_" + xtile].frame != 2)
        {
            game["t_" + (ytile - i) + "_" + xtile].onFire = 1;
            name = "f_" + _global.depth;
            removeMovieClip (game.clip["i_" + (ytile - i) + "_" + xtile]);
            game.clip.attachMovie(ob.playerFire, name, 50000 + _global.depth);
            ++_global.depth;
            game.clip[name]._x = xtile * game.tileW + 15;
            game.clip[name]._y = (ytile - i) * game.tileH + 15;
            game.clip[name].xtile = xtile;
            game.clip[name].ytile = ytile - i;
            if (i == ob.bombForce)
            {
                game.clip[name].gotoAndStop(4);
            }
            else
            {
                game.clip[name].gotoAndStop(2);
            } // end else if
            if (game["t_" + (ytile - i) + "_" + xtile].frame == 3 || game["t_" + (ytile - i) + "_" + xtile].frame == 4)
            {
                placeItem(ytile - i, xtile, ob);
                game.clip[name].gotoAndStop(4);
                break;
            } // end if
            continue;
        } // end if
        break;
    } // end of for
    for (i = 1; i <= ob.bombForce; i++)
    {
        if (game["t_" + (ytile + i) + "_" + xtile].frame != 2)
        {
            game["t_" + (ytile + i) + "_" + xtile].onFire = 1;
            name = "f_" + _global.depth;
            removeMovieClip (game.clip["i_" + (ytile + i) + "_" + xtile]);
            game.clip.attachMovie(ob.playerFire, name, 50000 + _global.depth);
            ++_global.depth;
            game.clip[name]._x = xtile * game.tileW + 15;
            game.clip[name]._y = (ytile + i) * game.tileH + 15;
            game.clip[name].xtile = xtile;
            game.clip[name].ytile = ytile + i;
            if (i == ob.bombForce)
            {
                game.clip[name].gotoAndStop(3);
            }
            else
            {
                game.clip[name].gotoAndStop(2);
            } // end else if
            if (game["t_" + (ytile + i) + "_" + xtile].frame == 3 || game["t_" + (ytile + i) + "_" + xtile].frame == 4)
            {
                placeItem(ytile + i, xtile, ob);
                game.clip[name].gotoAndStop(3);
                break;
            } // end if
            continue;
        } // end if
        break;
    } // end of for
    for (i = 1; i <= ob.bombForce; i++)
    {
        if (game["t_" + ytile + "_" + (xtile - i)].frame != 2)
        {
            game["t_" + ytile + "_" + (xtile - i)].onFire = 1;
            name = "f_" + _global.depth;
            removeMovieClip (game.clip["i_" + ytile + "_" + (xtile - i)]);
            game.clip.attachMovie(ob.playerFire, name, 50000 + _global.depth);
            ++_global.depth;
            game.clip[name]._x = (xtile - i) * game.tileW + 15;
            game.clip[name]._y = ytile * game.tileH + 15;
            game.clip[name].xtile = xtile - i;
            game.clip[name].ytile = ytile;
            if (i == ob.bombForce)
            {
                game.clip[name].gotoAndStop(6);
            }
            else
            {
                game.clip[name].gotoAndStop(5);
            } // end else if
            if (game["t_" + ytile + "_" + (xtile - i)].frame == 3 || game["t_" + ytile + "_" + (xtile - i)].frame == 4)
            {
                placeItem(ytile, xtile - i, ob);
                game.clip[name].gotoAndStop(6);
                break;
            } // end if
            continue;
        } // end if
        break;
    } // end of for
    for (i = 1; i <= ob.bombForce; i++)
    {
        if (game["t_" + ytile + "_" + (xtile + i)].frame != 2)
        {
            game["t_" + ytile + "_" + (xtile + i)].onFire = 1;
            name = "f_" + _global.depth;
            removeMovieClip (game.clip["i_" + ytile + "_" + (xtile + i)]);
            game.clip.attachMovie(ob.playerFire, name, 50000 + _global.depth);
            ++_global.depth;
            game.clip[name]._x = (xtile + i) * game.tileW + 15;
            game.clip[name]._y = ytile * game.tileH + 15;
            game.clip[name].xtile = xtile + i;
            game.clip[name].ytile = ytile;
            if (i == ob.bombForce)
            {
                game.clip[name].gotoAndStop(7);
            }
            else
            {
                game.clip[name].gotoAndStop(5);
            } // end else if
            if (game["t_" + ytile + "_" + (xtile + i)].frame == 3 || game["t_" + ytile + "_" + (xtile + i)].frame == 4)
            {
                placeItem(ytile, xtile + i, ob);
                game.clip[name].gotoAndStop(7);
                break;
            } // end if
            continue;
        } // end if
        break;
    } // end of for
    name = "";
} // End of the function
function dropBomb(ob)
{
    name = "b_" + ob.ytile + "_" + ob.xtile;
    name2 = "t_" + ob.ytile + "_" + ob.xtile;
    if (ob.clip._x)
    {
        if (!game.clip["b_" + ob.ytile + "_" + ob.xtile].player)
        {
            if (ob.bombsLeft > 0)
            {
                game[name2].allowId = ob.id;
                preDetonate(ob.ytile, ob.xtile, ob);
                ob.bombsLeft = ob.bombsLeft - 1;
                d2 = 5000 + ob.ytile * 20 + ob.xtile;
                game.clip.attachMovie("explosive", name, d2);
                game.clip[name]._x = ob.xtile * game.tileW;
                game.clip[name]._y = ob.ytile * game.tileH;
                game.clip[name].player = ob;
                game.clip[name].name = game.clip[name];
                game.clip[name].xtile = ob.xtile;
                game.clip[name].ytile = ob.ytile;
                game.clip[name].tile = "b_" + ob.ytile + "_" + ob.xtile;
            } // end if
        } // end if
    } // end if
} // End of the function
function rewalk(ob, dir)
{
    if (dir == 1)
    {
        if (Math.round(ob.x / 30) - ob.leftX > ob.rightX - Math.round(ob.x / 30) && ob.downleft && ob.upleft)
        {
            ob.x = ob.x - ob.speed;
        }
        else if (ob.downright && ob.upright)
        {
            ob.x = ob.x + ob.speed;
        } // end else if
    }
    else if (dir == 2)
    {
        if (Math.round(ob.y / 30) - ob.upY > ob.downY - Math.round(ob.y / 30) && ob.upright && ob.upleft)
        {
            ob.y = ob.y - ob.speed;
        }
        else if (ob.downright && ob.downleft)
        {
            ob.y = ob.y + ob.speed;
        } // end else if
    } // end else if
} // End of the function
function moveChar(ob, dirx, diry)
{
    getMyCorners(ob.x, ob.y + ob.speed * diry, ob);
    allow = true;
    if (diry == -1 && allow)
    {
        if (ob.upleft && ob.upright)
        {
            ob.y = ob.y + ob.speed * diry;
        }
        else
        {
            ob.y = ob.ytile * game.tileH + ob.height;
            if (!multipleKeys)
            {
                rewalk(ob, 1);
            } // end if
        } // end if
    } // end else if
    if (diry == 1 && allow)
    {
        if (ob.downleft && ob.downright)
        {
            ob.y = ob.y + ob.speed * diry;
        }
        else
        {
            ob.y = (ob.ytile + 1) * game.tileH - ob.height;
            if (!multipleKeys)
            {
                rewalk(ob, 1);
            } // end if
        } // end if
    } // end else if
    getMyCorners(ob.x + ob.speed * dirx, ob.y, ob);
    if (dirx == -1 && allow)
    {
        if (ob.downleft && ob.upleft)
        {
            ob.x = ob.x + ob.speed * dirx;
        }
        else
        {
            ob.x = ob.xtile * game.tileW + ob.width;
            if (!multipleKeys)
            {
                rewalk(ob, 2);
            } // end if
        } // end if
    } // end else if
    if (dirx == 1 && allow)
    {
        if (ob.upright && ob.downright)
        {
            ob.x = ob.x + ob.speed * dirx;
        }
        else
        {
            ob.x = (ob.xtile + 1) * game.tileW - ob.width;
            if (!multipleKeys)
            {
                rewalk(ob, 2);
            } // end if
        } // end if
    } // end else if
    sItem = game["t_" + ob.ytile + "_" + ob.xtile].item;
    if (ob.speedUp > 0)
    {
        --ob.speedUp;
    }
    else if (ob.speed == 5)
    {
        ob.speed = 3;
        ob.x = Math.floor(ob.x / game.tileW) * game.tileW + 15;
        ob.y = Math.floor(ob.y / game.tileH) * game.tileH + 15;
    } // end else if
    if (sItem)
    {
        if (sItem == 1)
        {
            ob.bombForce = ob.bombForce + 1;
        }
        else if (sItem == 2)
        {
            ob.speed = 5;
            ob.speedUp = ob.speedUp + 300;
            ob.x = Math.floor(ob.x / game.tileW) * game.tileW + 15;
            ob.y = Math.floor(ob.y / game.tileH) * game.tileH + 15;
        }
        else if (sItem == 3)
        {
            ob.bombsLeft = ob.bombsLeft + 1;
        }
        else if (sItem == 4)
        {
            _global.score = _global.score + 1;
        } // end else if
        removeMovieClip (game.clip["i_" + ob.ytile + "_" + ob.xtile]);
        game["t_" + ob.ytile + "_" + ob.xtile].item = 0;
    } // end if
    ob.clip._x = ob.x;
    ob.clip._y = ob.y;
    ob.clip.gotoAndStop(dirx + diry * 2 + 3);
    ob.xtile = Math.floor(ob.clip._x / game.tileW);
    ob.ytile = Math.floor(ob.clip._y / game.tileH);
    return (true);
} // End of the function
function detectKeys()
{
    var _loc3 = _root.char;
    multipleKeys = false;
    var _loc2 = false;
    if (Key.isDown(39))
    {
        _loc2 = _root.moveChar(_loc3, 1, 0);
        if (_loc2 != 0)
        {
            multipleKeys = true;
        } // end if
    }
    else if (Key.isDown(37))
    {
        _loc2 = _root.moveChar(_loc3, -1, 0);
        if (_loc2 != 0)
        {
            multipleKeys = true;
        } // end if
    }
    else if (Key.isDown(38))
    {
        _loc2 = _root.moveChar(_loc3, 0, -1);
        if (_loc2 != 0)
        {
            multipleKeys = true;
        } // end if
    }
    else if (Key.isDown(40))
    {
        _loc2 = _root.moveChar(_loc3, 0, 1);
        if (_loc2 != 0)
        {
            multipleKeys = true;
        } // end else if
    } // end else if
    if (!_loc2)
    {
        _loc3.clip.char.gotoAndStop(1);
    }
    else
    {
        _loc3.clip.char.play();
    } // end else if
    if (Key.isDown(32))
    {
        dropBomb(_root.char);
    } // end if
} // End of the function
function detectKeys2()
{
    var _loc3 = _root.char2;
    multipleKeys = false;
    var _loc2 = false;
    if (Key.isDown(68))
    {
        _loc2 = _root.moveChar(_loc3, 1, 0);
        if (_loc2 != 0)
        {
            multipleKeys = true;
        } // end if
    }
    else if (Key.isDown(65))
    {
        _loc2 = _root.moveChar(_loc3, -1, 0);
        if (_loc2 != 0)
        {
            multipleKeys = true;
        } // end if
    }
    else if (Key.isDown(87))
    {
        _loc2 = _root.moveChar(_loc3, 0, -1);
        if (_loc2 != 0)
        {
            multipleKeys = true;
        } // end if
    }
    else if (Key.isDown(83))
    {
        _loc2 = _root.moveChar(_loc3, 0, 1);
        if (_loc2 != 0)
        {
            multipleKeys = true;
        } // end else if
    } // end else if
    if (!_loc2)
    {
        _loc3.clip.char.gotoAndStop(1);
    }
    else
    {
        _loc3.clip.char.play();
    } // end else if
    if (Key.isDown(20))
    {
        dropBomb(_root.char2);
    } // end if
} // End of the function
function enemyBrain()
{
    for (var _loc5 = 0; _loc5 < _global.enemyNumb; ++_loc5)
    {
        var _loc6 = "enemy" + _loc5;
        var _loc2 = game[_loc6];
        if (_loc2.bombForce > 5 && _loc2.bombsLeft > 2)
        {
            _loc2.bombLeft = 2;
        } // end if
        getMyCorners3(_loc2.x + _loc2.speed * _loc2.xMove, _loc2.y + _loc2.speed * _loc2.yMove, _loc2);
        if (_loc2.downleft && _loc2.upleft && _loc2.downright && _loc2.upright && random(100) > _loc2.turning)
        {
            moveChar(_loc2, _loc2.xMove, _loc2.yMove);
            continue;
        } // end if
        xRightPos2 = 0;
        xLeftPos2 = 0;
        yUpPos2 = 0;
        yDownPos2 = 0;
        thisPos2 = 0;
        getMyCorners3(_loc2.x, _loc2.y, _loc2);
        if (_loc2.downright && _loc2.upright && _loc2.upleft && _loc2.downleft)
        {
            thisPos2 = 1;
        } // end if
        getMyCorners3(_loc2.x + _loc2.speed, _loc2.y, _loc2);
        if (_loc2.downright && _loc2.upright && xMove != -1)
        {
            xRightPos2 = 1;
        } // end if
        getMyCorners3(_loc2.x - _loc2.speed, _loc2.y, _loc2);
        if (_loc2.downleft && _loc2.upleft && xMove != 1)
        {
            xLeftPos2 = 1;
        } // end if
        getMyCorners3(_loc2.x, _loc2.y - _loc2.speed, _loc2);
        if (_loc2.upright && _loc2.upleft && yMove != -1)
        {
            yUpPos2 = 1;
        } // end if
        getMyCorners3(_loc2.x, _loc2.y + _loc2.speed, _loc2);
        if (_loc2.downright && _loc2.downleft && yMove != 1)
        {
            yDownPos2 = 1;
        } // end if
        xRightPos = 0;
        xLeftPos = 0;
        yUpPos = 0;
        yDownPos = 0;
        thisPos = 0;
        getMyCorners1(_loc2.x + _loc2.speed, _loc2.y, _loc2);
        if (_loc2.downright && _loc2.upright && xMove != -1)
        {
            xRightPos = 1;
        } // end if
        getMyCorners1(_loc2.x - _loc2.speed, _loc2.y, _loc2);
        if (_loc2.downleft && _loc2.upleft && xMove != 1)
        {
            xLeftPos = 1;
        } // end if
        getMyCorners1(_loc2.x, _loc2.y - _loc2.speed, _loc2);
        if (_loc2.upright && _loc2.upleft && yMove != 1)
        {
            yUpPos = 1;
        } // end if
        getMyCorners1(_loc2.x, _loc2.y + _loc2.speed, _loc2);
        if (_loc2.downright && _loc2.downleft && yMove != -1)
        {
            yDownPos = 1;
        } // end if
        xRightBox = 0;
        xLeftBox = 0;
        yUpBox = 0;
        yDownBox = 0;
        getMyCorners2(_loc2.x + _loc2.speed, _loc2.y, _loc2);
        if ((_loc2.downright == 3 || _loc2.downright == 4) && (_loc2.upright == 3 || _loc2.upright == 4))
        {
            xRightBox = 1;
        } // end if
        getMyCorners2(_loc2.x - _loc2.speed, _loc2.y, _loc2);
        if ((_loc2.downleft == 3 || _loc2.downleft == 4) && (_loc2.upleft == 3 || _loc2.upleft == 4))
        {
            xLeftBox = 1;
        } // end if
        getMyCorners2(_loc2.x, _loc2.y - _loc2.speed, _loc2);
        if ((_loc2.upright == 3 || _loc2.upright == 4) && (_loc2.upleft == 3 || _loc2.upleft == 4))
        {
            yUpBox = 1;
        } // end if
        getMyCorners2(_loc2.x, _loc2.y + _loc2.speed, _loc2);
        if ((_loc2.downright == 3 || _loc2.downright == 4) && (_loc2.downleft == 3 || _loc2.downleft == 4))
        {
            yDownBox = 1;
        } // end if
        if (game.clip[_loc6]._x && game["t_" + _loc2.ytile + "_" + _loc2.xtile].walkableComp && thisPos2 && (xLeftPos2 || xRightPos2 || yUpPos2 || yDownPos2))
        {
            if (_global.level >= 0 || _global.twoPlayer == 1)
            {
                var _loc4 = _loc2.xtile - char.xtile;
                var _loc3 = _loc2.ytile - char.ytile;
                if (_loc4 < 0)
                {
                    _loc4 = _loc4 * -1;
                } // end if
                if (_loc3 < 0)
                {
                    _loc3 = _loc3 * -1;
                } // end if
                if (_loc2.bombForce > 4)
                {
                    _loc2.bombF = 4;
                }
                else
                {
                    _loc2.bombF = _loc2.bombForce;
                } // end else if
                if ((_loc4 <= _loc2.bombF && _loc3 == _loc2.ytile || _loc3 <= _loc2.bombForce && _loc2.xtile == char.xtile) && random(100) > 80 - _global.agressiveness)
                {
                    if (_loc2.bombsLeft > 0)
                    {
                        dropBomb(_loc2);
                        if (_loc2.xmove == 1)
                        {
                            if (_loc2.xLeftPos2 == 1)
                            {
                                _loc2.xMove = -1;
                            } // end if
                        } // end if
                        if (_loc2.xmove = -1)
                        {
                            if (_loc2.xRightPos2 == 1)
                            {
                                _loc2.xMove = 1;
                            } // end if
                        } // end if
                        if (_loc2.ymove == 1)
                        {
                            if (_loc2.yUpPos2 == 1)
                            {
                                _loc2.yMove = -1;
                            } // end if
                        } // end if
                        if (_loc2.ymove = -1)
                        {
                            if (_loc2.yDownPos2 == 1)
                            {
                                _loc2.yMove = 1;
                            } // end if
                        } // end if
                    } // end if
                } // end if
                for (j = 0; j <= 3; j++)
                {
                    if (j != _loc5)
                    {
                        _loc4 = _loc2.xtile - game["enemy" + j].xtile;
                        _loc3 = _loc2.ytile - game["enemy" + j].ytile;
                        if (_loc4 < 0)
                        {
                            _loc4 = _loc4 * -1;
                        } // end if
                        if (_loc3 < 0)
                        {
                            _loc3 = _loc3 * -1;
                        } // end if
                        if ((_loc4 <= _loc2.bombF && _loc2.ytile == game["enemy" + j].ytile || _loc3 <= _loc2.bombForce && _loc2.xtile == game["enemy" + j].xtile) && random(100) > 80 - _global.agressiveness)
                        {
                            if (_loc2.bombsLeft > 0)
                            {
                                dropBomb(_loc2);
                                if (_loc2.xmove == 1)
                                {
                                    if (_loc2.xLeftPos2 == 1)
                                    {
                                        _loc2.xMove = -1;
                                    } // end if
                                } // end if
                                if (_loc2.xmove = -1)
                                {
                                    if (_loc2.xRightPos2 == 1)
                                    {
                                        _loc2.xMove = 1;
                                    } // end if
                                } // end if
                                if (_loc2.ymove == 1)
                                {
                                    if (_loc2.yUpPos2 == 1)
                                    {
                                        _loc2.yMove = -1;
                                    } // end if
                                } // end if
                                if (_loc2.ymove = -1)
                                {
                                    if (_loc2.yDownPos2 == 1)
                                    {
                                        _loc2.yMove = 1;
                                    } // end if
                                } // end if
                            } // end if
                        } // end if
                    } // end if
                } // end of for
            } // end if
        } // end if
        if (thisPos2 && !xLeftPos2 && !xRightPos2 && !yUpPos2 && !yDownPos2)
        {
            _loc2.clip.char.gotoAndStop(1);
            continue;
        } // end if
        if (!thisPos2 && !xLeftPos2 && !xRightPos2 && !yUpPos2 && !yDownPos2)
        {
            if (_loc2.xMove == 0)
            {
                if (xLeftPos && xRightPos)
                {
                    _loc2.xMove = random(2) * 2 - 1;
                    _loc2.yMove = 0;
                }
                else if (xLeftPos)
                {
                    _loc2.xMove = -1;
                    _loc2.yMove = 0;
                }
                else if (xRightPos)
                {
                    _loc2.xMove = 1;
                    _loc2.yMove = 0;
                }
                else if (_loc2.yMove > 0 && !yDownPos)
                {
                    _loc2.xMove = 0;
                    _loc2.yMove = -_loc2.yMove;
                }
                else if (_loc2.yMove < 0 && !yUpPos)
                {
                    _loc2.xMove = 0;
                    _loc2.yMove = -_loc2.yMove;
                } // end else if
            }
            else if (yUpPos && yDownPos)
            {
                _loc2.xMove = 0;
                _loc2.yMove = random(2) * 2 - 1;
            }
            else if (yUpPos)
            {
                _loc2.xMove = 0;
                _loc2.yMove = -1;
            }
            else if (yDownPos)
            {
                _loc2.xMove = 0;
                _loc2.yMove = 1;
            }
            else if (_loc2.xMove > 0 && !xRightPos)
            {
                _loc2.xMove = 0;
                _loc2.yMove = -_loc2.yMove;
            }
            else if (_loc2.xMove < 0 && !xLeftPos)
            {
                _loc2.xMove = 0;
                _loc2.yMove = -_loc2.yMove;
            } // end else if
            moveChar(_loc2, _loc2.xMove, _loc2.yMove);
            continue;
        } // end if
        if (_loc2.xMove == 0)
        {
            if (xLeftPos2 && xRightPos2 && xLeftPos && xRightPos)
            {
                _loc2.xMove = random(2) * 2 - 1;
                _loc2.yMove = 0;
                if ((yUpBox || yDownBox) && random(100) > 70)
                {
                    dropBomb(_loc2);
                    if (random(100) > 50)
                    {
                        _loc2.yMove = -_loc2.yMove;
                        _loc2.xMove = 0;
                    } // end if
                } // end if
            }
            else if (xLeftPos2 && xLeftPos)
            {
                _loc2.xMove = -1;
                _loc2.yMove = 0;
                if ((yUpBox || yDownBox) && random(100) > 70)
                {
                    dropBomb(_loc2);
                    if (random(100) > 50)
                    {
                        _loc2.yMove = -_loc2.yMove;
                        _loc2.xMove = 0;
                    } // end if
                } // end if
            }
            else if (xRightPos2 && xRightPos)
            {
                _loc2.xMove = 1;
                _loc2.yMove = 0;
                if ((yUpBox || yDownBox) && random(100) > 70)
                {
                    dropBomb(_loc2);
                    if (random(100) > 50)
                    {
                        _loc2.yMove = -_loc2.yMove;
                        _loc2.xMove = 0;
                    } // end if
                } // end if
            }
            else if (_loc2.yMove > 0 && !yDownPos2)
            {
                _loc2.xMove = 0;
                _loc2.yMove = -_loc2.yMove;
                if (xLeftBox || xRightBox || yUpBox || yDownBox)
                {
                    dropBomb(_loc2);
                } // end if
            }
            else if (_loc2.yMove < 0 && !yUpPos2)
            {
                _loc2.xMove = 0;
                _loc2.yMove = -_loc2.yMove;
                if (xLeftBox || xRightBox || yUpBox || yDownBox)
                {
                    dropBomb(_loc2);
                } // end else if
            } // end else if
        }
        else if (yUpPos2 && yDownPos2 && yUpPos && yDownPos)
        {
            _loc2.xMove = 0;
            _loc2.yMove = random(2) * 2 - 1;
            if ((xLeftBox || xRightBox) && random(100) > 70)
            {
                dropBomb(_loc2);
                if (random(100) > 50)
                {
                    _loc2.yMove = 0;
                    _loc2.xMove = -_loc2.xMove;
                } // end if
            } // end if
        }
        else if (yUpPos2 && yUpPos)
        {
            _loc2.xMove = 0;
            _loc2.yMove = -1;
            if ((xLeftBox || xRightBox) && random(100) > 70)
            {
                dropBomb(_loc2);
                if (random(100) > 50)
                {
                    _loc2.yMove = 0;
                    _loc2.xMove = -_loc2.xMove;
                } // end if
            } // end if
        }
        else if (yDownPos2 && yDownPos)
        {
            _loc2.xMove = 0;
            _loc2.yMove = 1;
            if ((xRightBox || xLeftBox) && random(100) > 70)
            {
                dropBomb(_loc2);
                if (random(100) > 50)
                {
                    _loc2.yMove = 0;
                    _loc2.xMove = -_loc2.xMove;
                } // end if
            } // end if
        }
        else if (_loc2.xMove > 0 && !xRightPos2)
        {
            _loc2.xMove = 0;
            _loc2.yMove = -_loc2.yMove;
            if (xLeftBox || xRightBox || yUpBox || yDownBox)
            {
                dropBomb(_loc2);
            } // end if
        }
        else if (_loc2.xMove < 0 && !xLeftPos2)
        {
            _loc2.xMove = 0;
            _loc2.yMove = -_loc2.yMove;
            if (xLeftBox || xRightBox || yUpBox || yDownBox)
            {
                dropBomb(_loc2);
            } // end else if
        } // end else if
        moveChar(_loc2, _loc2.xMove, _loc2.yMove);
    } // end of for
} // End of the function
function checkKilled(ob, target)
{
    getMyCorners5(ob.x, ob.y, ob);
    if (ob.upleft || ob.upright || ob.downleft || ob.downright)
    {
        removeMovieClip (ob.clip);
        game.clip["t_" + ob.ytile + "_" + ob.xtile].gotoAndStop(5);
    } // end if
    if (!char.clip._x && !char2.clip._x && _global.twoPlayer)
    {
        if (!draw)
        {
            goNext = 1;
        } // end if
        draw = 1;
    } // end if
} // End of the function
function checkVictory()
{
    if (goNext >= 1)
    {
        ++goNext;
    }
    else
    {
        victory = 4;
        if (game.clip.enemy0._x || char2.clip._x)
        {
            victory = victory - 1;
        } // end if
        if (game.clip.enemy1._x)
        {
            victory = victory - 1;
        } // end if
        if (game.clip.enemy2._x)
        {
            victory = victory - 1;
        } // end if
        if (!char.clip._x)
        {
            if (!_global.twoPlayer)
            {
                victory = 3;
            } // end if
        }
        else
        {
            victory = victory - 1;
        } // end else if
        if (victory == 3)
        {
            if (goNext == 0)
            {
                goNext = 1;
            } // end if
        } // end if
    } // end else if
    if (goNext >= 30)
    {
        if (draw)
        {
            gotoAndStop(19);
        }
        else if (char.clip._x)
        {
            if (_global.twoPlayer)
            {
                gotoAndStop(17);
            }
            else
            {
                _global.agressiveness = _global.agressiveness + 4;
                gotoAndStop(11);
            } // end else if
        }
        else if (char2.clip._x)
        {
            if (_global.twoPlayer)
            {
                if (_global.twoPlayer)
                {
                    gotoAndStop(18);
                } // end if
            } // end if
        }
        else if (_global.lifes >= 1)
        {
            gotoAndStop(13);
            --_global.lifes;
        }
        else
        {
            gotoAndStop(12);
        } // end else if
        removeMovieClip (_root.tiles);
    } // end if
} // End of the function
if (!_global.twoPlayer)
{
    levelShow = "Level " + _global.level;
} // end if
mapLevel = _global.mapLevel;
enemies = [[13, 13], [13, 1], [1, 13]];
game = {tileW: 30, tileH: 30};
game.Tile0 = function ()
{
};
game.Tile0.prototype.walkable = true;
game.Tile0.prototype.frame = 1;
game.Tile0.prototype.walkableComp = 1;
game.Tile0.prototype.allowId = 0;
game.Tile0.prototype.item = 0;
game.Tile0.prototype.onFire = 0;
game.Enemy = function ()
{
};
game.Enemy.prototype.bombsLeft = 1;
game.Enemy.prototype.speed = 3;
game.Enemy.prototype.bombForce = 1;
game.Tile1 = function ()
{
};
game.Tile1.prototype.walkable = false;
game.Tile1.prototype.frame = 2;
game.Tile1.prototype.walkableComp = 0;
game.Tile1.prototype.item = 0;
game.Tile2 = function ()
{
};
game.Tile2.prototype.walkable = false;
game.Tile2.prototype.frame = 3;
game.Tile2.prototype.walkableComp = 0;
game.Tile2.prototype.item = 0;
game.Tile2.prototype.onFire = 0;
game.Tile3 = function ()
{
};
game.Tile3.prototype.walkable = false;
game.Tile3.prototype.frame = 3;
game.Tile3.prototype.walkableComp = 0;
game.Tile3.prototype.item = 0;
game.Tile3.prototype.onFire = 0;
game.Tile4 = function ()
{
};
game.Tile4.prototype.walkable = false;
game.Tile4.prototype.frame = 4;
game.Tile4.prototype.walkableComp = 0;
game.Tile4.prototype.item = 0;
game.Tile4.prototype.onFire = 0;
char = {xtile: 1, ytile: 1, speed: 3};
char2 = {xtile: 13, ytile: 13, speed: 3};
goNext = 0;
draw = 0;
playerFire = _global.playerFire;
player = _global.player;
playerFire2 = _global.playerFire2;
player2 = _global.player2;
playerFire3 = _global.playerFire3;
player3 = _global.player3;
playerFire4 = _global.playerFire4;
player4 = _global.player4;
if (_global.twoPlayer)
{
    p1name = "Player 1";
    p2name = "Player 2";
}
else
{
    p1name = _global.name;
    p2name = "Enemy 1";
} // end else if
buildMap(mapLevel);
stop ();
onEnterFrame = function ()
{
    checkup = char.clip._x + "   " + char2.clip._x + "   " + draw + "   " + goNext;
};
