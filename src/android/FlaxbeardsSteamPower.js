Block.defineBlock(200, "Steam Boiler", [
    ["anvil_top_damaged_x", 1],
    ["gold_block", 0],
    ["anvil_top_damaged_x", 0],
    ["anvil_top_damaged_x", 0],
    ["anvil_top_damaged_x", 0],
    ["anvil_top_damaged_x", 0]
], 49, false, 0);
Block.setDestroyTime(200, 4.3);

Block.defineBlock(201, "Steam Heater", [
    ["anvil_top_damaged_x", 1],
    ["anvil_top_damaged_x", 1],
    ["anvil_top_damaged_x", 1],
    ["anvil_top_damaged_x", 1],
    ["anvil_top_damaged_x", 1],
    ["anvil_top_damaged_x", 1]
], 49, false, 0);
Block.setDestroyTime(201, 4.3);

Block.defineBlock(202, "Crucible", [
    ["hardened_clay", 0],
    ["cauldron_top", 0],
    ["hardened_clay", 0],
    ["hardened_clay", 0],
    ["hardened_clay", 0],
    ["hardened_clay", 0]
], 49, false, 0);
Block.setDestroyTime(202, 4.3);

Block.defineBlock(203, "Steam Filler", [
    ["stonecutter", 3],
    ["anvil_top_damaged_x", 2],
    ["stonecutter", 3],
    ["stonecutter", 3],
    ["stonecutter", 3],
    ["stonecutter", 3]
], 49, false, 0);
Block.setDestroyTime(203, 4.3);

ModPE.setItem(492, "hopper", 0, "Brass Ingot");
ModPE.setItem(493, "lead", 0, "Ingot Mold");
ModPE.setItem(494, "magma_cream", 0, "Steam Drill");
ModPE.setItem(495, "map_empty", 0, "Steam Saw");
ModPE.setItem(496, "map_filled", 0, "Steam Shovel");
ModPE.setItem(497, "book_enchanted", 0, "Esteemed Innovation");
ModPE.setItem(326, "gold_horse_armor", 0, "Copper Ingot");

Item.addShapedRecipe(497, 1, 0, [" i ", "cb ", "   "], ["i", 265, 0, "c", 326, 0, "b", 340, 0]);
Item.addShapedRecipe(326, 1, 0, ["gg ", "gi ", "   "], ["g", 266, 0, "i", 265, 0]);
Item.addShapedRecipe(200, 1, 0, ["bbb", "bfb", "bbb"], ["f", 61, 0, "b", 492, 0]);
Item.addShapedRecipe(493, 1, 0, ["bbb", "bfb", "bbb"], ["f", 265, 0, "b", 336, 0]);
Item.addShapedRecipe(201, 1, 0, ["ccc", "bbb", " b "], ["c", 326, 0, "b", 492, 0]);
Item.addShapedRecipe(202, 1, 0, ["b b", "b b", "bbb"], ["b", 336, 0]);
Item.addShapedRecipe(494, 1, 0, ["bii", "bci", "cbb"], ["c", 326, 0, "b", 492, 0, "i", 265, 0]);
Item.addShapedRecipe(496, 1, 0, ["bib", "bcb", "cbi"], ["c", 326, 0, "b", 492, 0, "i", 265, 0]);
Item.addShapedRecipe(495, 1, 0, ["iii", "bci", "cbi"], ["c", 326, 0, "b", 492, 0, "i", 265, 0]);
Item.addShapedRecipe(203, 1, 0, [" b ", "cbc", "cbc"], ["b", 492, 0, "c", 4, 0]);

var steamgo = 0;
var screwon = false;
var steamtick = 0;
var steamflux;
var steamgenerate = false;
var fX;
var fY;
var fZ;
var boiler = 200;
var heater = 201;
var filler = 203;
var steam = 0;
var iron = false;
var gold = false;
var saxe = 12000;
var sdrill = 12000;
var sshovel = 12000;
var ons = false;
var ond = false;
var ona = false;


function useItem(x, y, z, itemId, blockId, side) {
    if (itemId == 495 && blockId == filler && getTile(x, y - 1, z) == boiler && steamgenerate) {
        ona = true;
        clientMessage("Filling with steam...");
    }

    if (itemId == 494 && blockId == filler && getTile(x, y - 1, z) == boiler && steamgenerate) {
        ond = true;
        clientMessage("Filling with steam...");
    }

    if (itemId == 496 && blockId == filler && getTile(x, y - 1, z) == boiler && steamgenerate) {
        ons = true;
        clientMessage("Filling with steam...");
    }

    if (itemId == 265 && iron == false && gold == false && blockId == 202) {
        iron = true;
        gold = false;
        addItemInventory(265, -1)
    }

    if (itemId == 266 && iron == true && gold == false && blockId == 202) {
        iron = true;
        gold = true;
        addItemInventory(266, -1)
    }

    if (itemId == 493 && iron == true && gold == true && blockId == 202) {
        iron = false;
        gold = false;
        Level.dropItem(x, y + 1, z, 0, 492, 1)
    }

    if (blockId == heater && steamgo == false && steamgenerate == true && getTile(x, y + 1, z) == boiler) {
        steamgo = true;
        fX = x;
        fY = y;
        fZ = z;
        print("Heater Working!")
    }

    if (blockId == heater && steamgo == false && steamgenerate == true && getTile(x, y - 1, z) == boiler) {
        steamgo = true;
        fX = x;
        fY = y;
        fZ = z;
        print("Heater Working!")
    }

    if (blockId == heater && steamgo == false && steamgenerate == true && getTile(x + 1, y, z) == boiler) {
        steamgo = true;
        fX = x;
        fY = y;
        fZ = z;
        print("Heater Working!")
    }

    if (blockId == heater && steamgo == false && steamgenerate == true && getTile(x - 1, y, z) == boiler) {
        steamgo = true;
        fX = x;
        fY = y;
        fZ = z;
        print("Heater Working!")
    }

    if (blockId == heater && steamgo == false && steamgenerate == true && getTile(x, y, z + 1) == boiler) {
        steamgo = true;
        fX = x;
        fY = y;
        fZ = z;
        print("Heater Working!")
    }

    if (blockId == heater && steamgo == false && steamgenerate == true && getTile(x, y, z - 1) == boiler) {
        steamgo = true;
        fX = x;
        fY = y;
        fZ = z;
        print("Heater Working!")
    }

    if (blockId == boiler && itemId == 263 && getTile(x, y - 1, z) == 8 || blockId == boiler && itemId == 263 && getTile(x, y - 1, z) == 9) {
        addItemInventory(263, -1)
        steamgenerate = true;
    }

    if (itemId == 497) {
        openBookMenu();
    }
}


function modTick() {
    if (ona && Player.getCarriedItem() == 495) {
        Block.setDestroyTime(5, 0.1);
        Block.setDestroyTime(17, 0.1);
        Block.setDestroyTime(47, 0.1);
        Block.setDestroyTime(53, 0.1);
        Block.setDestroyTime(54, 0.1);
        Block.setDestroyTime(63, 0.1);
        Block.setDestroyTime(64, 0.1);
        Block.setDestroyTime(65, 0.1);
        Block.setDestroyTime(68, 0.1);
    }

    if (ona) {
        saxe--;
    }

    if (saxe == 0) {
        ona = false;
    }

    if (ons && Player.getCarriedItem() == 496) {
        Block.setDestroyTime(3, 0.1);
        Block.setDestroyTime(2, 0.1);
        Block.setDestroyTime(12, 0.1);
        Block.setDestroyTime(13, .1);
    }

    if (ons) {
        sshovel--;
    }

    if (sshovel == 0) {
        ons = false;
    }

    if (ond && Player.getCarriedItem() == 494) {
        Block.setDestroyTime(4, 0.10);
        Block.setDestroyTime(1, 0.10);
        Block.setDestroyTime(16, 0.30);
        Block.setDestroyTime(15, 0.30);
        Block.setDestroyTime(14, 0.35);
        Block.setDestroyTime(56, 0.40);
        Block.setDestroyTime(73, 0.35);
        Block.setDestroyTime(74, 0.35);
        Block.setDestroyTime(21, 0.30);
        Block.setDestroyTime(246, 0.80);
        Block.setDestroyTime(49, 0.80);
        Block.setDestroyTime(129, 0.35);
        Block.setDestroyTime(61, 0.20);
        Block.setDestroyTime(28, 0.20);
    }

    if (ond) {
        sdrill--;
    }

    if (sdrill == 0) {
        ond = false;
    }

    if (steamgenerate) {
        steam--;
    }

    if (steamgo) {
        steamtick++;
        heaterON();
    }

    if (steamtick == 5) {
        steamtick = 0;
    }

    if (steam == 0) {
        steamgenerate = false;
        steamgo = false;
    }
}

function heaterON() {
    if (getTile(fX + 1, fY, fZ) == 61) {
        Level.setFurnaceSlot(fX + 1, fY, fZ, 1, 263, 0, 1);
    }

    if (getTile(fX - 1, fY, fZ) == 61) {
        Level.setFurnaceSlot(fX - 1, fY, fZ, 1, 263, 0, 1);
    }

    if (getTile(fX, fY, fZ + 1) == 61) {
        Level.setFurnaceSlot(fX, fY, fZ + 1, 1, 263, 0, 1);
    }

    if (getTile(fX, fY, fZ - 1) == 61) {
        Level.setFurnaceSlot(fX, fY, fZ - 1, 1, 263, 0, 1);
    }

    if (getTile(fX, fY + 1, fZ) == 61) {
        Level.setFurnaceSlot(fX, fY + 1, fZ, 1, 263, 0, 1);
    }

    if (getTile(fX, fY - 1, fZ) == 61) {
        Level.setFurnaceSlot(fX, fY - 1, fZ, 1, 263, 0, 1);
    }
}

function destroyBlock(x, y, z, side) {
    if (Level.getTile(x, y, z) == 61 && getCarriedItem() == 494) {
        preventDefault()
        setTile(x, y, z, 0);
        Level.dropItem(x, y, z, 0, 61, 1);
    }

    if (Level.getTile(x, y, z) == 4 && getCarriedItem() == 494 || Level.getTile(x, y, z) == 1 && getCarriedItem() == 494) {
        preventDefault()
        setTile(x, y, z, 0);
        Level.dropItem(x, y, z, 0, 4, 1);
    }

    if (Level.getTile(x, y, z) == 16 && getCarriedItem() == 494) {
        preventDefault()
        setTile(x, y, z, 0);
        Level.dropItem(x, y, z, 0, 263, 1);
    }

    if (Level.getTile(x, y, z) == 15 && getCarriedItem() == 494) {
        preventDefault()
        setTile(x, y, z, 0);
        Level.dropItem(x, y, z, 0, 15, 1);
    }

    if (Level.getTile(x, y, z) == 14 && getCarriedItem() == 494) {
        preventDefault()
        setTile(x, y, z, 0);
        Level.dropItem(x, y, z, 0, 14, 1);
    }

    if (Level.getTile(x, y, z) == 56 && getCarriedItem() == 494) {
        preventDefault()
        setTile(x, y, z, 0);
        Level.dropItem(x, y, z, 0, 264, 1);
    }

    if (Level.getTile(x, y, z) == 73 && getCarriedItem() == 494) {
        preventDefault()
        setTile(x, y, z, 0);
        Level.dropItem(x, y, z, 0, 331, 4);
    }

    if (Level.getTile(x, y, z) == 74 && getCarriedItem() == 494) {
        preventDefault()
        setTile(x, y, z, 0);
        Level.dropItem(x, y, z, 0, 331, 4);
    }

    if (Level.getTile(x, y, z) == 129 && getCarriedItem() == 494) {
        preventDefault()
        setTile(x, y, z, 0);
        Level.dropItem(x, y, z, 0, 388, 1);
    }

    if (Level.getTile(x, y, z) == 21 && getCarriedItem() == 494) {
        preventDefault()
        setTile(x, y, z, 0);
        Level.dropItem(x, y, z, 4, 351, 4);
    }

    if (Level.getTile(x, y, z) == 49 && getCarriedItem() == 494) {
        preventDefault()
        setTile(x, y, z, 0);
        Level.dropItem(x, y, z, 0, 49, 1);
    }
}

function openBookMenu() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                var mainLayout = new android.widget.LinearLayout(ctx);
                mainLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

                var layout = new android.widget.LinearLayout(ctx);
                layout.setOrientation(android.widget.LinearLayout.VERTICAL);

                var sc = new android.widget.ScrollView(ctx);
                sc.addView(layout);
                mainLayout.addView(sc);

                var selectTv = new android.widget.TextView(ctx);
                selectTv.setText("The Esteemed Innovation Guide by Flaxbeard");
                selectTv.setTextSize(25);

                var crucibleBtn = new android.widget.Button(ctx);
                crucibleBtn.setText("Crucibles Molds and Brass");

                var boilerBtn = new android.widget.Button(ctx);
                boilerBtn.setText("Steam Boilers");

                var heaterBtn = new android.widget.Button(ctx);
                heaterBtn.setText("Steam Heater");

                var fillerBtn = new android.widget.Button(ctx);
                fillerBtn.setText("Steam Fillers");

                var toolsBtn = new android.widget.Button(ctx);
                toolsBtn.setText("Steam Tools");

                var closeBtn = new android.widget.Button(ctx);
                closeBtn.setText("X");
                closeBtn.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(v) {
                        dismissBookMenu();
                    }
                });

                crucibleBtn.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(v) {
                        openCrucibleMenu();
                    }
                });

                boilerBtn.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(v) {
                        openBoilerMenu();
                    }
                });

                heaterBtn.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(v) {
                        openHeaterMenu();
                    }
                });

                fillerBtn.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(v) {
                        openFillerMenu();
                    }
                });

                toolsBtn.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(v) {
                        openToolsMenu();
                    }
                });

                layout.addView(selectTv);
                layout.addView(crucibleBtn);
                layout.addView(boilerBtn);
                layout.addView(heaterBtn);
                layout.addView(fillerBtn);
                layout.addView(toolsBtn);
                layout.addView(closeBtn);

                MENU = new android.widget.PopupWindow(mainLayout, ctx.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx.getWindowManager().getDefaultDisplay().getHeight());
                MENU.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GRAY));
                MENU.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER, 0, 0);
            } catch (e) {
                print(e);
            }
        }
    });
}

function dismissBookMenu() {
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                if (MENU != null) MENU.dismiss();
            } catch (e) {
                print(e);
            }
        }
    });
}

function openCrucibleMenu() {
    var ctx1 = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx1.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                var mainLayout1 = new android.widget.LinearLayout(ctx1);
                mainLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);

                var layout1 = new android.widget.LinearLayout(ctx1);
                layout1.setOrientation(android.widget.LinearLayout.VERTICAL);

                var sc1 = new android.widget.ScrollView(ctx1);
                sc1.addView(layout1);
                mainLayout1.addView(sc1);

                var selectPTv = new android.widget.TextView(ctx1);
                selectPTv.setText("Crucible Molds and Brass");
                selectPTv.setTextSize(25);

                var descr = new android.widget.TextView(ctx1);
                descr.setText("I've discovered the perfect metal for my steam powered machines: brass. In order to make it you will need a Crucible, an Ingot Mold, some Iron and some Gold. So tap with either Iron or Gold on the Crucible then tap it again with the other metal that you haven't used before, then, take your Mold and tap the Crucible. You will now have a Brass Ingot.")
                descr.setTextSize(20);

                var daisy = new android.widget.TextView(ctx1);
                daisy.setText("Crucible= 7 Bricks in a Stone Cutter")
                daisy.setTextSize(25);

                var water = new android.widget.TextView(ctx1);
                water.setText("Ingot Mold= 8 Bricks and 1 Iron Ingot in a Crafting Table")
                water.setTextSize(25);

                var closePBtn = new android.widget.Button(ctx1);
                closePBtn.setText("X");
                closePBtn.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(v) {
                        dismissCrucibleMenu();
                    }
                });

                layout1.addView(selectPTv);
                layout1.addView(descr);
                layout1.addView(daisy);
                layout1.addView(water);
                layout1.addView(closePBtn);

                MENU1 = new android.widget.PopupWindow(mainLayout1, ctx1.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx1.getWindowManager().getDefaultDisplay().getHeight());
                MENU1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GRAY));
                MENU1.showAtLocation(ctx1.getWindow().getDecorView(), android.view.Gravity.CENTER, 0, 0);
            } catch (e) {
                print(e);
            }
        }
    });
}

function dismissCrucibleMenu() {
    var ctx1 = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx1.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                if (MENU1 != null) MENU1.dismiss();
            } catch (e) {
                print(e);
            }
        }
    });
}

function openBoilerMenu() {
    var ctx2 = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx2.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                var mainLayout2 = new android.widget.LinearLayout(ctx2);
                mainLayout2.setOrientation(android.widget.LinearLayout.VERTICAL);

                var layout2 = new android.widget.LinearLayout(ctx2);
                layout2.setOrientation(android.widget.LinearLayout.VERTICAL);

                var sc2 = new android.widget.ScrollView(ctx2);
                sc2.addView(layout2);
                mainLayout2.addView(sc2);

                var selectLTv = new android.widget.TextView(ctx2);
                selectLTv.setText("Steam Boiler");
                selectLTv.setTextSize(25);

                var descr1 = new android.widget.TextView(ctx2);
                descr1.setText("And now the main step to my steam revolution. The Steam Boiler, crafted in a Stone Cutter with 8 Brass Ingots and 1 Furnace, is the main way to get Steam. To make it work just place it above a Water source and tap it with a piece of Coal. The machine is building up steam.")
                descr1.setTextSize(20);

                var closeLBtn = new android.widget.Button(ctx2);
                closeLBtn.setText("X");
                closeLBtn.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(v) {
                        dismissBoilerMenu();
                    }
                });

                layout2.addView(selectLTv);
                layout2.addView(descr1);
                layout2.addView(closeLBtn);

                MENU2 = new android.widget.PopupWindow(mainLayout2, ctx2.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx2.getWindowManager().getDefaultDisplay().getHeight());
                MENU2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GRAY));
                MENU2.showAtLocation(ctx2.getWindow().getDecorView(), android.view.Gravity.CENTER, 0, 0);
            } catch (e) {
                print(e);
            }
        }
    });
}

function dismissBoilerMenu() {
    var ctx2 = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx2.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                if (MENU2 != null) MENU2.dismiss();
            } catch (e) {
                print(e);
            }
        }
    });
}

function openHeaterMenu() {
    var ctx3 = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx3.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                var mainLayout3 = new android.widget.LinearLayout(ctx3);
                mainLayout3.setOrientation(android.widget.LinearLayout.VERTICAL);

                var layout3 = new android.widget.LinearLayout(ctx3);
                layout3.setOrientation(android.widget.LinearLayout.VERTICAL);

                var sc3 = new android.widget.ScrollView(ctx3);
                sc3.addView(layout3);
                mainLayout3.addView(sc3);

                var selectPRTv = new android.widget.TextView(ctx3);
                selectPRTv.setText("Steam Heather");
                selectPRTv.setTextSize(25);

                var descr2 = new android.widget.TextView(ctx3);
                descr2.setText("I've discovered a way to power furnaces with steam! Using a Steam Heater, this block crafted in a Stone Cutter from 4 Brass Ingots and 3 Copper Ingots, which placed near a functional Steam Boiler, tapped, will power all the Furnaces around it. ")
                descr2.setTextSize(20);

                var closePRBtn = new android.widget.Button(ctx3);
                closePRBtn.setText("X");
                closePRBtn.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(v) {
                        dismissHeaterMenu();
                    }
                });

                layout3.addView(selectPRTv);
                layout3.addView(descr2);
                layout3.addView(closePRBtn);

                MENU3 = new android.widget.PopupWindow(mainLayout3, ctx3.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx3.getWindowManager().getDefaultDisplay().getHeight());
                MENU3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GRAY));
                MENU3.showAtLocation(ctx3.getWindow().getDecorView(), android.view.Gravity.CENTER, 0, 0);
            } catch (e) {
                print(e);
            }
        }
    });
}

function dismissHeaterMenu() {
    var ctx3 = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx3.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                if (MENU3 != null) MENU3.dismiss();
            } catch (e) {
                print(e);
            }
        }
    });
}

function openFillerMenu() {
    var ctx4 = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx4.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                var mainLayout4 = new android.widget.LinearLayout(ctx4);
                mainLayout4.setOrientation(android.widget.LinearLayout.VERTICAL);

                var layout4 = new android.widget.LinearLayout(ctx4);
                layout4.setOrientation(android.widget.LinearLayout.VERTICAL);

                var sc4 = new android.widget.ScrollView(ctx4);
                sc4.addView(layout4);
                mainLayout4.addView(sc4);

                var selectTTv = new android.widget.TextView(ctx4);
                selectTTv.setText("Steam Filler");
                selectTTv.setTextSize(25);

                var descr3 = new android.widget.TextView(ctx4);
                descr3.setText("I've managed to find a way to input steam into my steam tools and I came out with the Steam Filler, crafted n a Stone Cutter from 3 Brass Ingots and 4 Cobblestone, this block if placed on the top of a functional Steam Boiler will be the recharge station for all portable steam tools.")
                descr3.setTextSize(20);

                var closeTransportBtn = new android.widget.Button(ctx4);
                closeTransportBtn.setText("X");
                closeTransportBtn.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(v) {
                        dismissFillerMenu();
                    }
                });

                layout4.addView(selectTTv);
                layout4.addView(descr3);
                layout4.addView(closeTransportBtn);

                MENU4 = new android.widget.PopupWindow(mainLayout4, ctx4.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx4.getWindowManager().getDefaultDisplay().getHeight());
                MENU4.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GRAY));
                MENU4.showAtLocation(ctx4.getWindow().getDecorView(), android.view.Gravity.CENTER, 0, 0);
            } catch (e) {
                print(e);
            }
        }
    });
}

function dismissFillerMenu() {
    var ctx4 = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx4.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                if (MENU4 != null) MENU4.dismiss();
            } catch (e) {
                print(e);
            }
        }
    });
}


function openToolsMenu() {
    var ctx5 = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

    ctx5.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                var mainLayout5 = new android.widget.LinearLayout(ctx5);
                mainLayout5.setOrientation(android.widget.LinearLayout.VERTICAL);

                var layout5 = new android.widget.LinearLayout(ctx5);
                layout5.setOrientation(android.widget.LinearLayout.VERTICAL);

                var sc5 = new android.widget.ScrollView(ctx5);
                sc5.addView(layout5);
                mainLayout5.addView(sc5);

                var selectUTv = new android.widget.TextView(ctx5);
                selectUTv.setText("Steam Tools");
                selectUTv.setTextSize(25);

                var descr4 = new android.widget.TextView(ctx5);
                descr4.setText("The progress made me invent 3 types of portable steam powered tools. That can by charged by tapping a Steam Filler.")
                descr4.setTextSize(20);

//@kingbudderjr: Please explain these var names.
                var orechid = new android.widget.TextView(ctx5);
                orechid.setText("Steam Drill= crafted in a Crafting Table from 4 Brass Ingots, 3 Iron Ingots and 2 Copper Ingots, this item if charged can mine pickaxe type blocks")
                orechid.setTextSize(25);

                var agricarnation = new android.widget.TextView(ctx5);
                agricarnation.setText("Steam Saw= crafted from 5 Iron Ingots, 2 Brass Ingots and 2 Copper Ingots, this item if powered can chop axe type blocks")
                agricarnation.setTextSize(25);

                var endoflame = new android.widget.TextView(ctx5);
                agricarnation.setText("Steam Shovel= crafted from 2 Iron Ingots, 5 Brass Ingots and 2 Copper Ingots, this item if powered can dig shovel type blocks.")
                agricarnation.setTextSize(25);

                var closeUseBtn = new android.widget.Button(ctx5);
                closeUseBtn.setText("X");
                closeUseBtn.setOnClickListener(new android.view.View.OnClickListener() {
                    onClick: function(v) {
                        dismissToolsMenu();
                    }
                });

                layout5.addView(selectUTv);
                layout5.addView(descr4);
                layout5.addView(orechid);
                layout5.addView(agricarnation);
                layout5.addView(endoflame);
                layout5.addView(closeUseBtn);

                MENU5 = new android.widget.PopupWindow(mainLayout5, ctx5.getWindowManager().getDefaultDisplay().getWidth() / 2, ctx5.getWindowManager().getDefaultDisplay().getHeight());
                MENU5.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GRAY));
                MENU5.showAtLocation(ctx5.getWindow().getDecorView(), android.view.Gravity.CENTER, 0, 0);
            } catch (e) {
                print(e);
            }
        }
    });
}

function dismissToolsMenu() {
    var ctx5 = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx5.runOnUiThread(new java.lang.Runnable() {
        run: function() {
            try {
                if (MENU5 != null) MENU5.dismiss();
            } catch (e) {
                print(e);
            }
        }
    });
}
