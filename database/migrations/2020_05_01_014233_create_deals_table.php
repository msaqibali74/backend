<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDealsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('deals', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('area');
            $table->string('city');
            $table->enum('deal_type',['rent','sale'])->default("sale");
            $table->enum('property_type',['file','plot','house','flat'])->default('file');
            $table->string('size');
            $table->string('block');
            $table->string('property_no')->nullable();
            $table->bigInteger('buy_price')->default(0);
            $table->bigInteger('sell_price')->default(0);
            $table->enum('sale_type',['buy','sell'])->default("sell");
            $table->string('client_name');
            $table->string('client_contact');
            $table->enum('selling_source',['zameen','facebook','walk_in','bill_boards','reference','sms'])->default('zameen')->index();
            $table->enum('selling_party',['asad','moeen','market','society'])->default('society');
            $table->integer('total_comission')->default(0);
            $table->integer('office_share')->default(0);
            $table->date('closing_date');
            $table->date('deal_month');
            $table->enum('status',['P','D','C'])->default('P');
            $table->unsignedInteger('user_id')->unsigned();
            $table->unsignedInteger('agent_id')->unsigned();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('deals');
    }
}
